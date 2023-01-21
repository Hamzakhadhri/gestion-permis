package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.dto.ContraventionDTO;


public interface ContraventionService {
	
	List<ContraventionDTO> listContravention();
	ContraventionDTO getContravention(Long id);
	void addContravention(ContraventionDTO c);
	void updateContravention(ContraventionDTO contravention);
	void deleteContravention (Long id);

}
