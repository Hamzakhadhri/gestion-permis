package com.gestionPermis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestionPermis.dto.ContraventionDTO;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.services.ContraventionService;
@CrossOrigin("*")
@RestController
@RequestMapping("/contravention")
public class ContraventionController {
	
	@Autowired
	private ContraventionService contraventionService;
	
	@GetMapping("/all")
	public ResponseEntity<List<ContraventionDTO>> getAllContravention(){
		List<ContraventionDTO> contraventions = contraventionService.listContravention();
		return new ResponseEntity<>(contraventions, HttpStatus.OK);
	}
	
	@GetMapping("/contravention/{id}")
	public ResponseEntity<ContraventionDTO> getConducteur(@PathVariable Long id){
		return new ResponseEntity<>(contraventionService.getContravention(id),HttpStatus.OK);
	}
	
	@PostMapping("/add")
	
	public void addConducteur (@RequestBody ContraventionDTO c){
		contraventionService.addContravention(c);
	}
	
	@PutMapping("/update")
	public void updateContravention(@RequestBody ContraventionDTO contravention){
		contraventionService.updateContravention(contravention);
	}
	
	@DeleteMapping("delete/{id}")
	public void deleteContravention(@PathVariable Long id ) {
		contraventionService.deleteContravention(id);
	}

}
