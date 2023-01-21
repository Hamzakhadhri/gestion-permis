import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contravention } from '../Models/Contravention';

@Injectable({
  providedIn: 'root'
})
export class ContraventionService {

  constructor(private http: HttpClient) { }
  private host = 'http://127.0.0.1:8080/contravention';httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })} 
  private errorMessage!:string;
  

  getContraventions(): Observable<Array<Contravention>> {
    return this.http.get<Array<Contravention>>(this.host + '/all').pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  AddContravention(contravention: Contravention): Observable<object> {
    return this.http.post(this.host + '/add', contravention).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  deleteContravention(id: number): Observable<any> {
    return this.http.delete(this.host + '/delete/' + id).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  UpdateContravention(contravention: Contravention): Observable<object> {
    return this.http.put(this.host + '/update', contravention).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  get1Contravention(id:any): Observable<any> {
    return this.http.get(this.host + "/contravention/" + id).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

}
