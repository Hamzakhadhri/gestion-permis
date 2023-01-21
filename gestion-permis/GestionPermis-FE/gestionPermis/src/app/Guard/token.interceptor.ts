import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authreq = request;
    const token = this.loginService.getToken();
    if (token != null) {
      authreq = authreq.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(authreq).pipe(
      // hundel token expired
      catchError(err => {
        // onError
         if (err instanceof HttpErrorResponse) {
           if (err.status===401) {    
            localStorage.clear();         
            location.reload();            
           }
         }
        return throwError(err);
      })
    );
  
  }
    }


export const tokenIntercept = [{ 
  provide: HTTP_INTERCEPTORS, 
  useClass: TokenInterceptor, 
  multi: true }];

