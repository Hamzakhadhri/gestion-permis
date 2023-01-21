package com.gestionPermis.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Contravention {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String motif;
	private Date date;
	private int retaitPoints;
	@ManyToOne
	private Permis permis;


}
