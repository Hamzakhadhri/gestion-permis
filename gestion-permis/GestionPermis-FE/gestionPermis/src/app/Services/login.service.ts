import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private host = 'http://127.0.0.1:8009/token';
isLogged = new BehaviorSubject(false);
public authenticatedUser:Login |undefined
  constructor(private http:HttpClient, private router: Router) { }

public authenticate(login:Login):Observable<boolean>{
  this.http.post(this.host,login).subscribe({
    next:result=>{
      localStorage.clear()
      this.authenticatedUser=login
      this.isLogged.next(true)
      const Token1 = JSON.stringify(result)
      const Token2 = JSON.parse(Token1)
      localStorage.setItem("jwt", Token2["accessToken"])
      this.router.navigate(['allConducteur'])
      
      return of(true)
    },
    error:error=>{
      localStorage.removeItem('jwt')
      console.log(error)
    }
    })
    return of(false)
} 

deleteToken(){
  localStorage.removeItem('jwt')
  this.router.navigate(['login'])
}
getToken(): string|null{
  return localStorage.getItem('jwt')
}
getAuthenticatedUser():any{
  return this.authenticatedUser
}

}

