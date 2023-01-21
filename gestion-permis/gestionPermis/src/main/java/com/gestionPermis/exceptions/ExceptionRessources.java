package com.gestionPermis.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class ExceptionRessources {
	
	@ExceptionHandler(ConducteurNotFoundException.class)
	public ResponseEntity<Object> ExceptionConducteur (ConducteurNotFoundException ex){
		return new ResponseEntity<>("Ressource Not Found",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(PermisNotFoundException.class)
	public ResponseEntity<Object> ExceptionPermis (PermisNotFoundException ex){
		return new ResponseEntity<>("Ressource Not Found",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(ContraventionNotFoundException.class)
	public ResponseEntity<Object> ExceptionContravention (ContraventionNotFoundException ex){
		return new ResponseEntity<>("Ressource Not Found",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(PointsinsufficientException.class)
	public ResponseEntity<Object> ExceptionPoints (PointsinsufficientException ex){
		return new ResponseEntity<>("Points insufficient",HttpStatus.NOT_ACCEPTABLE);
	}

}
