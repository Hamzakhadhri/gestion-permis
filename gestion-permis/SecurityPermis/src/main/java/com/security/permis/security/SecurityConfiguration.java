package com.security.permis.security;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.security.permis.models.AppUser;
import com.security.permis.service.AccountService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration{
    private RsaKeysConfig rsaKeysConfig;
    private AccountService accountService;
    private PasswordEncoder passwordEncoder;

    public SecurityConfiguration(RsaKeysConfig rsaKeysConfig,AccountService accountService, PasswordEncoder passwordEncoder) {
        this.rsaKeysConfig = rsaKeysConfig;
        this.accountService=accountService;
        this.passwordEncoder=passwordEncoder;
    }
    
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf->csrf.disable())
                .authorizeHttpRequests(auth->auth.requestMatchers("/token/**").permitAll())
                .authorizeHttpRequests(auth->auth.requestMatchers("/users/all").permitAll())
                .authorizeHttpRequests(auth->auth.requestMatchers("/h2-console/*").permitAll())
                .authorizeHttpRequests(auth->auth.anyRequest().authenticated())
                .sessionManagement(sess->sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                .httpBasic(Customizer.withDefaults())
                .build();
    }
/*
 * return httpSecurity .csrf().disable()
 * .authorizeHttpRequests().anyRequest().permitAll().and().build();
 */
    
  @Bean
  public AuthenticationManager authenticationManager(UserDetailsService userDetailsService){
    var authProvieder = new DaoAuthenticationProvider();
      authProvieder.setPasswordEncoder(passwordEncoder);
      authProvieder.setUserDetailsService(userDetailsService);
    return new ProviderManager(authProvieder);
  }
    @Bean
    public UserDetailsService inMemoryUserDetailsManager(){
      return new UserDetailsService() {
          @Override
          public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
              AppUser user = accountService.searchUserByUsername(username);
              if (user != null) {
                  List<GrantedAuthority> autorities = user.getRole().stream()
                          .map(r -> new SimpleGrantedAuthority(r.getRole())).collect(Collectors.toList());
                  return new User(user.getUsername(), user.getPasswd(), autorities);
              } else {
                  throw new UsernameNotFoundException("User not found with the name " + username);
              }
          }
      };
    }




  /*public UserDetailsService inMemoryUserDetailsManager(){
	  return new InMemoryUserDetailsManager(
			  User.withUsername("yassine").password(passwordEncoder.encode("0000")).authorities("User").build(),
              User.withUsername("admin").password(passwordEncoder.encode("0000")).authorities("Admin").build()
			  );
	  }
  */

    @Bean
    JwtEncoder jwtEncoder(){
        JWK jwk = new RSAKey.Builder(rsaKeysConfig.publicKey()).privateKey(rsaKeysConfig.privateKey()).build();
        JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwkSource);
    }

    @Bean
    JwtDecoder jwtDecoder(){
        return NimbusJwtDecoder.withPublicKey(rsaKeysConfig.publicKey()).build();
    }

}
