package com.gestionPermis.serviceImp;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.gestionPermis.dao.ContraventionRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.dto.ContraventionDTO;
import com.gestionPermis.exceptions.ConducteurNotFoundException;
import com.gestionPermis.exceptions.ContraventionNotFoundException;
import com.gestionPermis.exceptions.PermisNotFoundException;
import com.gestionPermis.exceptions.PointsinsufficientException;
import com.gestionPermis.mapper.MapperDTO;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.ContraventionService;
@Service
public class ContraventionServiceImp implements ContraventionService {
	
	@Autowired
	private ContraventionRepository contraventionRepository;
	@Autowired
	private PermisRepository permisRepository;
	@Autowired
	private MapperDTO contraventionDTO;

	
	@Override
	public List<ContraventionDTO> listContravention() {
		return contraventionRepository.findAll().stream()
				.map(c->contraventionDTO.getContraventionDTOFromContravention(c))
				.collect(Collectors.toList());
	}

	@Override
	public ContraventionDTO getContravention(Long id) {
		return contraventionDTO.getContraventionDTOFromContravention(contraventionRepository.findById(id).orElseThrow(()-> new ConducteurNotFoundException()));
	}

	

	@Override
	public void updateContravention(ContraventionDTO c) {
		Permis permis = permisRepository.findById(c.getPermis().getId()).orElseThrow(()-> new PermisNotFoundException());
		if (permis == null) {
			throw new PermisNotFoundException();
			}
		Contravention contravention = contraventionRepository.findById(c.getId()).orElseThrow(()-> new ContraventionNotFoundException());
		if(permis.getPoints()+contravention.getRetaitPoints()>= c.getRetaitPoints()) {
			permis.setPoints(permis.getPoints()+contravention.getRetaitPoints() - c.getRetaitPoints());
			contraventionRepository.save(contraventionDTO.getContraventionFromContraventionDTO(c));
			permisRepository.save(permis);

		}else {
			throw new PointsinsufficientException();
		}
		
		
	}

	@Override
	public void deleteContravention(Long id) {
		Contravention c = contraventionRepository.findById(id).orElseThrow(()-> new ContraventionNotFoundException());
		Permis permis = permisRepository.findById(c.getPermis().getId()).orElseThrow(()-> new PermisNotFoundException());
		if (permis == null) {
			permis.setPoints(permis.getPoints()+c.getRetaitPoints());
			permisRepository.save(permis);}
		contraventionRepository.deleteById(id);
	}

	@Override
	public void addContravention(ContraventionDTO c)  {
		Permis permis = permisRepository.findById(c.getPermis().getId()).orElseThrow(()-> new PermisNotFoundException());
		if (permis == null) {
			throw new PermisNotFoundException();
			}
		if(permis.getPoints()>= c.getRetaitPoints()) {
			permis.setPoints(permis.getPoints() - c.getRetaitPoints());
			contraventionRepository.save(contraventionDTO.getContraventionFromContraventionDTO(c));
			permisRepository.save(permis);
			
		}else {
			throw new PointsinsufficientException();
		}
		

		
	}

	
}
	
	


