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

import com.gestionPermis.dto.ConducteurDTO;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.services.ConducteurService;
@CrossOrigin("*")
@RestController
@RequestMapping("/conducteur")
public class ConducteurController {
	
	@Autowired
	private ConducteurService conducteurService;
	
	@GetMapping("/all")
	public ResponseEntity<List<ConducteurDTO>> getAllConducteurs(){
		List<ConducteurDTO> conducteurs = conducteurService.listConducteurs();
		return new ResponseEntity<>(conducteurs, HttpStatus.OK);
	}
	
	@GetMapping("/conducteur/{id}")
	public ResponseEntity<ConducteurDTO> getConducteur(@PathVariable Long id){
		return new ResponseEntity<>(conducteurService.getConducteur(id),HttpStatus.OK);
	}
	
	@PostMapping(value="/add")
	public void addConducteur(@RequestBody ConducteurDTO conducteur){
		conducteurService.addConducteur(conducteur);		
	}
	
	@PutMapping("/update")
	public void updateConducteur(@RequestBody ConducteurDTO conducteur){
		conducteurService.updateConducteur(conducteur);
	}
	
	@DeleteMapping("delete/{id}")
	public void deleteConducteur(@PathVariable Long id ) {
		conducteurService.deleteConducteur(id);
	}
	

}
