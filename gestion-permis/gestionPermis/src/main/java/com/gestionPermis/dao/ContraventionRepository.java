package com.gestionPermis.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gestionPermis.models.Contravention;

public interface ContraventionRepository extends JpaRepository<Contravention, Long>{
	


}
