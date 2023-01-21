import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, startWith, tap } from 'rxjs';
import { Conducteur } from "src/app/Models/Conducteur";
import { Response } from "src/app/Models/Response";

import { ConducteurService } from 'src/app/Services/conducteur.service';
@Component({
  selector: 'app-lister-conducteur',
  templateUrl: './lister-conducteur.component.html',
  styleUrls: ['./lister-conducteur.component.css']
})
export class ListerConducteurComponent implements OnInit {
  response$!: Observable<Response>;
  constructor(private service: ConducteurService, private router : Router) { }

  ngOnInit(): void {
   //this.getallConducteur() 
   this.response$=this.service.conducteurs$.pipe(
    //tap(console.log),
    startWith({status:1} as Response)
   );
  }

  /* getallConducteur() {
    this.service.getConducteurs().subscribe({
      next: (response) => {
        this.conducteur = response;
      },
      error: err => {
        console.log(err);
      }});
  } */

  delete(conducteur : Conducteur){
    this.service.deleteConducteur(conducteur.id).subscribe({
      next: resp=>{
       // this.getallConducteur();
      },
      error: err=>{
        console.log(err);
      }}
    );

  }

  detail(conducteur : Conducteur){
    this.router.navigateByUrl("/detailConducteur/"+conducteur.id);
  }

  edit(conducteur : Conducteur){
    this.router.navigateByUrl("/editConducteur/"+conducteur.id);
   } 

}
