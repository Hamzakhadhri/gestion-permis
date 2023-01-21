package com.gestionPermis.models;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Permis {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private char type;
	private Date dateEmission;
	private Date dateExpiration;
	private int points;
	@ManyToOne
	private Conducteur conducteur;
	@OneToMany(mappedBy = "permis",cascade = CascadeType.ALL)
	private List<Contravention> contraventions;
	
}
