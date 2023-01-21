import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, throwError,map } from 'rxjs';
import { Conducteur } from '../Models/Conducteur';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http: HttpClient) {}

    private host = 'http://127.0.0.1:8080/conducteur';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })} 
      id!:string;
    private errorMessage!:string;
    
      conducteurs$=<Observable<Response>>this.http.get<Array<Conducteur>>(this.host + '/all').pipe(
        map(response=>{
          return{status:2 ,data:{conducteurs: response}}as Response;
        }),
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );

      conducteur$=<Observable<Response>>this.http.get<Conducteur>(this.host + "/conducteur/" + this.id).pipe(
        map(response=>{
          return{status:2 ,data:{conducteur: response}}as Response;
        }),
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
      
    /* getConducteurs(): Observable<Array<Conducteur>> {
      return this.http.get<Array<Conducteur>>(this.host + '/all').pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    } */

    AddConducteur(conducteur: Conducteur): Observable<object> {
      return this.http.post(this.host + '/add', conducteur).pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    }
  
    deleteConducteur(id: number): Observable<any> {
      return this.http.delete(this.host + '/delete/' + id).pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    }

    UpdateConducteur(conducteur: Conducteur): Observable<object> {
      return this.http.put(this.host + '/update', conducteur).pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    }

    get1Conducteur(id:any): Observable<any> {
      return this.http.get(this.host + "/conducteur/" + id).pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    }
 
}
