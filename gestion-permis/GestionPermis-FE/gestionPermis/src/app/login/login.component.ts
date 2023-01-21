import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../Models/Login';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


private loginUser!:Login

form: FormGroup;

  constructor(private authService: LoginService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      username : new FormControl("", Validators.required),
      passwd : new FormControl ("",Validators.required)
    
    };
    this.form = this.fb.group(formControls);

   }

  ngOnInit(): void {
  }

  onLogin():void{
    this.loginUser=this.form.value
    this.authService.authenticate(this.loginUser).subscribe({
      next:resp=>{
        this.router.navigate(["allConducteur"])
      },
      error:error=>{
        console.log(error)
        this.router.navigate(["login"])
      }
      
    })

  }

}
