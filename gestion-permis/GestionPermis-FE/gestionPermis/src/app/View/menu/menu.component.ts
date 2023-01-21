import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  logged!:boolean 
  constructor(private loginService:LoginService){
    this.loginService.isLogged.subscribe(res=>{
      this.logged=res;
    })
  }
 
  ngOnInit() {}
  logout(){
    this.loginService.deleteToken();
    this.loginService.isLogged.next(false)
  }

}
