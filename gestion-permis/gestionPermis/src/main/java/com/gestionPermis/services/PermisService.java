package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.dto.PermisDTO;



public interface PermisService {
			
	List<PermisDTO> listPermis();
	PermisDTO getPermis(Long id);
	void addPermis(PermisDTO permis);
	void updatePermis(PermisDTO permis);
	void deletePermis (Long id);

}

