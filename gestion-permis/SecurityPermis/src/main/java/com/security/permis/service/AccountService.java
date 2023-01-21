package com.security.permis.service;

import java.util.List;

import com.security.permis.models.Role;
import com.security.permis.models.AppUser;

public interface AccountService {
	void addNewUser(AppUser user);
	void addNewRole(Role role);
	void addRoleToUser(String username, String role);
	AppUser searchUserByUsername(String username);
	List<AppUser> listUser();
}
