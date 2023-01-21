package com.gestionPermis.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestionPermis.models.Permis;


public interface PermisRepository extends JpaRepository<Permis, Long> {

}
