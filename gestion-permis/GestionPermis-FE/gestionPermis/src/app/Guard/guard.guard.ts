import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})


export class GuardGuard implements CanActivate {
  constructor(private router:Router, private loginService:LoginService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>{
    const token = localStorage.getItem("jwt");
    if (token){
    this.loginService.isLogged.next(true)
    let decoded:any;
    try{
      decoded= jwtDecode(token);
    }catch(e){
      console.error(e);
      
    }
      
      return of(true)
    }
    else{
      this.router.navigate(['login']);
      return of(false);
    }
  }
}
