package com.gestionPermis.mapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.gestionPermis.dto.ConducteurDTO;
import com.gestionPermis.dto.ContraventionDTO;
import com.gestionPermis.dto.PermisDTO;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;



@Service
public class MapperDTO {
	public ConducteurDTO getConducteurDTOFromConducteur (Conducteur conducteur) {
		ConducteurDTO condDto = new ConducteurDTO();
		BeanUtils.copyProperties(conducteur, condDto);
		return condDto;
	}
	
	public Conducteur getConducteurFromConducteurDTO (ConducteurDTO condDTO) {
		Conducteur conducteur = new Conducteur();
		BeanUtils.copyProperties(condDTO, conducteur);;
		return conducteur;
		
	}
	
	
	
	public PermisDTO getPermisDTOFromPermis (Permis permis) {
		PermisDTO permisDto = new PermisDTO();
		BeanUtils.copyProperties(permis, permisDto);
		permisDto.setConducteur(getConducteurDTOFromConducteur(permis.getConducteur()));
		return permisDto;
	}
	
	public Permis getPermisFromPermisDTO (PermisDTO permisDTO) {
		Permis permis = new Permis();
		BeanUtils.copyProperties(permisDTO, permis);
		permis.setConducteur(getConducteurFromConducteurDTO(permisDTO.getConducteur()));
		return permis;
	}
	
	
	public ContraventionDTO getContraventionDTOFromContravention (Contravention contravention) {
		ContraventionDTO contDto = new ContraventionDTO();
		BeanUtils.copyProperties(contravention, contDto);
		contDto.setPermis(getPermisDTOFromPermis(contravention.getPermis()));
		return contDto;
	}
	
	public Contravention getContraventionFromContraventionDTO (ContraventionDTO contDTO) {
		Contravention contravention = new Contravention();
		BeanUtils.copyProperties(contDTO, contravention);
		contravention.setPermis(getPermisFromPermisDTO(contDTO.getPermis()));
		return contravention;
	}

}
