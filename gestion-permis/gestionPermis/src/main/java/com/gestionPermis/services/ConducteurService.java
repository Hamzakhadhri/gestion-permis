package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.dto.ConducteurDTO;
import com.gestionPermis.models.Conducteur;

public interface ConducteurService {
	
	List<ConducteurDTO> listConducteurs();
	ConducteurDTO getConducteur(Long id);
	void addConducteur(ConducteurDTO conducteur);
	void updateConducteur (ConducteurDTO conducteur);
	void deleteConducteur (Long id);

}
