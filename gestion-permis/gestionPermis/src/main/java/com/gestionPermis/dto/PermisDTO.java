package com.gestionPermis.dto;

import java.util.Date;

import lombok.Data;

@Data
public class PermisDTO {
	private Long id;
	private char type;
	private Date dateEmission;
	private Date dateExpiration;
	private int points;
	private ConducteurDTO conducteur;
}
