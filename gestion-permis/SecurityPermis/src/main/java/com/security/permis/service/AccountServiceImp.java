package com.security.permis.service;

import java.util.ArrayList;
import java.util.List;

import com.security.permis.security.SecurityConfiguration;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.security.permis.dao.RoleDao;
import com.security.permis.dao.UserDao;
import com.security.permis.models.Role;
import com.security.permis.models.AppUser;

@Service
@Transactional
public class AccountServiceImp implements AccountService {
	private RoleDao roleRep;
	private UserDao userRep;

	
	public AccountServiceImp(RoleDao roleRep, UserDao userRep) {
		this.roleRep=roleRep;
		this.userRep=userRep;

	}
	
	@Override
	public void addNewUser(AppUser user) {
		// TODO Auto-generated method stub
		//user.setPasswd(securityConfiguration.passwordEncoder().encode(user.getPasswd()));
		userRep.save(user);
	}

	@Override
	public void addNewRole(Role role) {
		// TODO Auto-generated method stub
		roleRep.save(role);
	}

	@Override
	public void addRoleToUser(String username, String role) {
		AppUser user = userRep.findByUsername(username);
		Role roles = roleRep.findByRole(role);
		user.getRole().add(roles);
		
	}

	@Override
	public AppUser searchUserByUsername(String username) {
		// TODO Auto-generated method stub
		return userRep.findByUsername(username);
	}

	@Override
	public List<AppUser> listUser() {
		
		return userRep.findAll();
	}


}
