import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contravention } from 'src/app/Models/Contravention';
import { Permis } from 'src/app/Models/Permis';
import { ContraventionService } from 'src/app/Services/contravention.service';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-update-contravention',
  templateUrl: './update-contravention.component.html',
  styleUrls: ['./update-contravention.component.css']
})
export class UpdateContraventionComponent implements OnInit {
  myform: FormGroup;
  message!: String;
  contravention! : Contravention;
  idPermis!:any;
  permis_!:Permis;
  permis!:Permis[];
  date!:any;
  id!:any;
  
  constructor(private service: ContraventionService, private servicePermis:PermisService ,private fb: FormBuilder,private route: Router,
    private datePipe: DatePipe, private activatedRoute:ActivatedRoute) { 
      let formControls = {
        motif: new FormControl('', [Validators.required]),
        retaitPoints: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        permis: new FormControl('', [Validators.required]),
      };
      this.myform = this.fb.group(formControls);
     }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllPermis()
    this.getPermis(this.id)
  this.service.get1Contravention(this.id).subscribe({
    next:(res)=>{
      this.contravention=res
      this.date = this.datePipe.transform(this.contravention.date,'yyyy-MM-dd')
    },
    error:err=>{
      console.log(err);
    }})
}


 OnupdateContravention()
 {
  this.contravention.permis = this.permis_
  this.contravention.date = this.myform.value.date
  this.contravention.retaitPoints = this.myform.value.retaitPoints
  this.contravention.motif = this.myform.value.motif
  this.service.UpdateContravention(this.contravention).subscribe({
    next:data=>{
      
    alert("mise a jour effectuée avec succes");
    this.route.navigateByUrl("/allContravention")
   },
   error:err=>{console.log(err)}})
   
  }
  getPermis(id : string){
    this.servicePermis.get1Permis(id).subscribe({
      next:res=>{
        this.permis_=res;
       
      },
      error:error=>{
        this.message=error
      }
      
    })
  }
  selectChangeHandler(event: any) {
    this.idPermis = event.target.value;
    this.getPermis(this.idPermis);
  }
  getAllPermis(){
    this.servicePermis.getPermis().subscribe({
      next:resp=>{
        this.permis=resp;
        return this.permis
      },
      error:error=>{
        this.message= error;
      }
    })
  }
}