import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, startWith, tap } from 'rxjs';
import { Conducteur } from 'src/app/Models/Conducteur';
import { Permis, Type } from 'src/app/Models/Permis';
import { ConducteurService } from 'src/app/Services/conducteur.service';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-ajouter-permis',
  templateUrl: './ajouter-permis.component.html',
  styleUrls: ['./ajouter-permis.component.css']
})
export class AjouterPermisComponent implements OnInit {

  myform: FormGroup;
  message!: String;
  permis !: Permis;
  conducteurs!: Conducteur[];
  types: Array<string>;
  conducteur!:Conducteur;
  idConducteur!:any;

  constructor(private service: PermisService, private serviceConducteur:ConducteurService ,private fb: FormBuilder,private route: Router) { 
    let formControls = {
      type: new FormControl("", [Validators.required]),
      dateEmission: new FormControl('', [Validators.required]),
      dateExpiration: new FormControl(''),
      points: new FormControl('10000', [Validators.required]),
      conducteur: new FormControl('', [Validators.required]),

    };
    
    this.types = Object.keys(Type).filter(key => isNaN(+key));
    this.myform = this.fb.group(formControls);


   }
   response$!: Observable<Response>;

  ngOnInit(): void {
    this.response$=this.serviceConducteur.conducteurs$.pipe(
      tap(console.log),
      startWith({status:1} as Response)
     );
    }
  

  selectChangeHandler(event: any) {
    this.idConducteur = event.target.value;
    this.getConducteur(this.idConducteur);
  }
  
  savePermis() {
  
    //this.permis.conducteur=this.conducteur
    this.permis=this.myform.value;
    this.permis.conducteur = this.conducteur;

    this.service.AddPermis(this.permis).subscribe({
      next:resp => {
        this.message = "Success !";
        this.route.navigateByUrl("/allPermis")

      },
      error:error => {
        console.log(error);
        this.message = error;
      }
  });
  }
/*
  getAllConducteurs(){
    this.serviceConducteur.getConducteurs().subscribe({
      next:resp=>{
        this.conducteurs=resp;
        return this.conducteur
      },
      error:error=>{
        this.message= error;
      }
    })
  }*/

  getConducteur(id : string){
    this.serviceConducteur.get1Conducteur(id).subscribe({
      next:res=>{
        this.conducteur=res;
       
      },
      error:error=>{
        this.message=error
      }
      
    })
  }
  

}
