package com.gestionPermis.serviceImp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionPermis.dao.ConducteurRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.dto.PermisDTO;
import com.gestionPermis.exceptions.ConducteurNotFoundException;
import com.gestionPermis.exceptions.PermisNotFoundException;
import com.gestionPermis.mapper.MapperDTO;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.PermisService;
@Service
public class PermisServiceImp implements PermisService {
	
	@Autowired
	private PermisRepository permisRepository;
	@Autowired
	private ConducteurRepository conducteurRepository;
	@Autowired
	private MapperDTO dtoImp;
	
	@Override
	public List<PermisDTO> listPermis() {
		return permisRepository.findAll().stream()
				.map(p->dtoImp.getPermisDTOFromPermis(p)).collect(Collectors.toList());
	}

	@Override
	public PermisDTO getPermis(Long id) {
		return dtoImp.getPermisDTOFromPermis(permisRepository.findById(id).orElseThrow(()-> new PermisNotFoundException()));
	}

	@Override
	public void addPermis(PermisDTO permis) {
		permisRepository.save(dtoImp.getPermisFromPermisDTO(permis));

	}

	@Override
	public void updatePermis(PermisDTO permis) {
		permisRepository.save(dtoImp.getPermisFromPermisDTO(permis));
	
		}

	@Override
	public void deletePermis(Long id) {
		permisRepository.deleteById(id);
	}
	
}
