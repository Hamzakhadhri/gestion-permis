package com.security.permis.controller;

import com.security.permis.models.Role;
import com.security.permis.models.AppUser;
import com.security.permis.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class AccountController {

    @Autowired
    private AccountService accountService;


    @GetMapping("/all")
    public List<AppUser> getAllUsers(){
        return accountService.listUser();
    }
    
    @PostMapping("/add")
    public void addUser(@RequestBody AppUser user){
        accountService.addNewUser(user);
    }

    @PostMapping("/addRole")
    public void addRole(@RequestBody Role role){
        accountService.addNewRole(role);
    }

    @PostMapping("/addUserToRole")
    public void addUsertoRole(@RequestParam String username, @RequestParam String role){
        accountService.addRoleToUser(username,role);
    }
}
