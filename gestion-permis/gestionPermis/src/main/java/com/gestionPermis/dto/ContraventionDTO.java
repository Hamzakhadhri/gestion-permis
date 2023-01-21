package com.gestionPermis.dto;

import java.util.Date;

import com.gestionPermis.models.Permis;

import lombok.Data;

@Data
public class ContraventionDTO {
	private Long id;
	private String motif;
	private Date date;
	private int retaitPoints;
	private PermisDTO permis;
}
