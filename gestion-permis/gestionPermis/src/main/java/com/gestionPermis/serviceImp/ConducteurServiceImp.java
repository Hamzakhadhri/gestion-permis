package com.gestionPermis.serviceImp;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionPermis.dao.ConducteurRepository;
import com.gestionPermis.dao.ContraventionRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.dto.ConducteurDTO;
import com.gestionPermis.exceptions.ConducteurNotFoundException;
import com.gestionPermis.mapper.MapperDTO;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.ConducteurService;
@Service
public class ConducteurServiceImp implements ConducteurService {
	
	@Autowired
	private ConducteurRepository conducteurRepository;
	@Autowired
	private PermisRepository permisRepository;
	@Autowired
	private ContraventionRepository contraventionRepository;
	@Autowired
	private MapperDTO conducteurDTOImp;
	
	@Override
	public List<ConducteurDTO> listConducteurs() {
		 List<Conducteur> c=conducteurRepository.findAll();
		 return c.stream().map(cond->conducteurDTOImp.getConducteurDTOFromConducteur(cond)).collect(Collectors.toList());
	}

	@Override
	public ConducteurDTO getConducteur(Long id) {
		return conducteurDTOImp.getConducteurDTOFromConducteur(conducteurRepository.findById(id).orElseThrow(()-> new ConducteurNotFoundException()));
		  
	}

	@Override
	public void addConducteur(ConducteurDTO conducteurdto) {
		conducteurRepository.save(conducteurDTOImp.getConducteurFromConducteurDTO(conducteurdto));
		
	}

	@Override
	public void updateConducteur(ConducteurDTO conducteurdto) {
		conducteurRepository.save(conducteurDTOImp.getConducteurFromConducteurDTO(conducteurdto));
		
	}

	@Override
	public void deleteConducteur(Long id) {
		conducteurRepository.deleteById(id);
	}
	

}
