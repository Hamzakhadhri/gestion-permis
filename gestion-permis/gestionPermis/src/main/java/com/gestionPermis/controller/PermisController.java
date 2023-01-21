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

import com.gestionPermis.dto.PermisDTO;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.PermisService;
@CrossOrigin("*")
@RestController
@RequestMapping("/permis")
public class PermisController {
	
	@Autowired
	private PermisService permisService;
	
	@GetMapping("/all")
	public ResponseEntity<List<PermisDTO>> getAllPermis(){
		List<PermisDTO> permis = permisService.listPermis();
		return new ResponseEntity<>(permis, HttpStatus.OK);
	}
	
	@GetMapping("/permis/{id}")
	public ResponseEntity<PermisDTO> getPermis(@PathVariable Long id){
		return new ResponseEntity<>(permisService.getPermis(id),HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public void addPermis(@RequestBody PermisDTO permis){
		permisService.addPermis(permis);	
	}
	
	@PutMapping("/update")
	public void updatePermis(@RequestBody PermisDTO permis){
		permisService.updatePermis(permis);
	}
	
	@DeleteMapping("delete/{id}")
	public void deletePermis(@PathVariable Long id ) {
		permisService.deletePermis(id);
	}

}
