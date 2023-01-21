import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Permis } from '../Models/Permis';

@Injectable({
  providedIn: 'root'
})
export class PermisService {

  constructor(private http: HttpClient) { }
  private host = 'http://127.0.0.1:8080/permis';httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })} 
  private errorMessage!:string;
  

  getPermis(): Observable<Array<Permis>> {
    return this.http.get<Array<Permis>>(this.host + '/all').pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  AddPermis(conducteur: Permis): Observable<object> {
    return this.http.post(this.host + '/add', conducteur).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  deletePermis(id: number): Observable<any> {
    return this.http.delete(this.host + '/delete/' + id).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  UpdatePermis(permis: Permis): Observable<object> {
    return this.http.put(this.host + '/update', permis).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  get1Permis(id:any): Observable<any> {
    return this.http.get(this.host + "/permis/" + id).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

}
