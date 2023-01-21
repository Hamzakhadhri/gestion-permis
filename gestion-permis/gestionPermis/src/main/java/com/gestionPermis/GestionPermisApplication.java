package com.gestionPermis;

import java.util.Date;

import java.util.stream.Stream;

import com.gestionPermis.security.RsaKeysConfig;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.gestionPermis.dao.ConducteurRepository;
import com.gestionPermis.dao.ContraventionRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;


@SpringBootApplication
@EnableConfigurationProperties(RsaKeysConfig.class)
public class GestionPermisApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionPermisApplication.class, args);
	}
	
	@Bean
	CommandLineRunner start(ConducteurRepository conducteurRepository, PermisRepository permisRepository, ContraventionRepository contraventionRepository) {
		return args ->{
			
			Stream.of("yassine","akrem","chaker", "samira").forEach(name->{
				Conducteur c = new Conducteur();
				c.setAdresse("Paris");
				c.setDateNaissance(new Date());
				c.setNom(name);
				c.setPrenom(name);
				conducteurRepository.save(c);
				
			});
			
			conducteurRepository.findAll().forEach(c->{
				Permis permis= new Permis();
				permis.setDateEmission(new Date());
				permis.setDateExpiration(new Date());
				permis.setPoints(1000);
				permis.setType('A');
				permis.setConducteur(c);
				permisRepository.save(permis);
				
			});
				permisRepository.findAll().forEach(p->{
				Contravention contra= new Contravention();
				contra.setDate(new Date());
				contra.setId(p.getConducteur().getId());
				contra.setMotif("Attention");
				contra.setPermis(p);
				contra.setRetaitPoints(50);
				contraventionRepository.save(contra);
				
				
			});
			
		};
	}

}
