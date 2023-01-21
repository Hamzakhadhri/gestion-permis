package com.security.permis.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.security.permis.models.Role;


public interface RoleDao extends JpaRepository<Role, Long>{
    Role findByRole(String role);
}
