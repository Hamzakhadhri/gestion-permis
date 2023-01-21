import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conducteur } from 'src/app/Models/Conducteur';
import { ConducteurService } from 'src/app/Services/conducteur.service';

@Component({
  selector: 'app-update-conducteur',
  templateUrl: './update-conducteur.component.html',
  styleUrls: ['./update-conducteur.component.css']
})
export class UpdateConducteurComponent implements OnInit {
  currentConducteur!:Conducteur;
  myform: FormGroup;
  message!: String;
  date!:any;
 
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private service:ConducteurService, private fb:FormBuilder,private datePipe: DatePipe) { 
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
    };
    this.myform = this.fb.group(formControls);
   }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    
    this.service.get1Conducteur(id).subscribe({
      next:(res)=>{
        this.currentConducteur=res
        this.date = this.datePipe.transform(this.currentConducteur.dateNaissance,'yyyy-MM-dd')
      },
      error:err=>{
        console.log(err);
      }
      
      
    })
  }

 
   OnupdateConducteur()
   {
    this.currentConducteur.nom = this.myform.value.nom
    this.currentConducteur.prenom = this.myform.value.prenom
    this.currentConducteur.adresse = this.myform.value.adresse
    this.currentConducteur.dateNaissance = this.myform.value.dateNaissance
     this.service.UpdateConducteur(this.currentConducteur).subscribe({
      next:data=>{
      alert("mise a jour effectuée avec succes");
      this.router.navigateByUrl("/allConducteur")
     },
     error:err=>{console.log(err)}})
     
    }
  }