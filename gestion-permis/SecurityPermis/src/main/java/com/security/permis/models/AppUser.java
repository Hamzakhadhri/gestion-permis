package com.security.permis.models;

import java.util.Collection;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String firstname;
	private String lastname;
	private String username;
	//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String passwd;
	@ManyToMany
	private Collection<Role> role;

}
