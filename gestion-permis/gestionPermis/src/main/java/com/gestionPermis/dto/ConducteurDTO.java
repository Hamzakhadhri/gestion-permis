package com.gestionPermis.dto;

import java.util.Date;

import lombok.Data;

@Data
public class ConducteurDTO {
	private Long id;
	private String nom;
	private String prenom;
	private String adresse;
	private Date dateNaissance;
}
