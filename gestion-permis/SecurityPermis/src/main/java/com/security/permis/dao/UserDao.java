package com.security.permis.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.permis.models.AppUser;


public interface UserDao extends JpaRepository<AppUser, Long> {
	AppUser findByUsername(String username);
}
