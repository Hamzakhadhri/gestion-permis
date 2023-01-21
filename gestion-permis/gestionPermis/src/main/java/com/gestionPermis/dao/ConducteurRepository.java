package com.gestionPermis.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestionPermis.models.Conducteur;


public interface ConducteurRepository extends JpaRepository<Conducteur, Long> {

}
