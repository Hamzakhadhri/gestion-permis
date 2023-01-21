package com.security.permis;

import com.security.permis.dao.RoleDao;
import com.security.permis.dao.UserDao;
import com.security.permis.models.AppUser;
import com.security.permis.models.Role;
import com.security.permis.security.RsaKeysConfig;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.stream.Stream;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeysConfig.class)
public class SecurityPermisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityPermisApplication.class, args);
	}
	@Bean
	CommandLineRunner start(UserDao userDao, RoleDao roleDao) {
		return args -> {

			Stream.of("yassine","chaker", "samira").forEach(name -> {
				AppUser appUser = new AppUser();
				appUser.setFirstname(name);
				appUser.setLastname(name);
				appUser.setUsername(name);
				appUser.setPasswd(passwordEncoder().encode("0000"));
				userDao.save(appUser);
			});
			Stream.of("admin", "user", "superUser").forEach(name -> {
				Role role = new Role();
				role.setRole(name);
				roleDao.save(role);
			});

		};
	}

	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}
