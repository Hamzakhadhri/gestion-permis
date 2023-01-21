import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contravention } from 'src/app/Models/Contravention';
import { Permis } from 'src/app/Models/Permis';
import { ContraventionService } from 'src/app/Services/contravention.service';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-ajouter-contravention',
  templateUrl: './ajouter-contravention.component.html',
  styleUrls: ['./ajouter-contravention.component.css']
})
export class AjouterContraventionComponent implements OnInit {
  myform: FormGroup;
  message!: String;
  contravention! : Contravention;
  idPermis!:any;
  permis_!:Permis;
  permis!:Permis[];
  constructor(private servicePermis: PermisService,private service: ContraventionService, private fb: FormBuilder,private route: Router) {
    let formControls = {
      motif: new FormControl('', [Validators.required]),
      retaitPoints: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      permis: new FormControl('', [Validators.required]),
    };
    this.myform = this.fb.group(formControls);
   }

  ngOnInit(): void {
    this.getAllPermis()
  }

  selectChangeHandler(event: any) {
    this.idPermis = event.target.value;
    this.getPermis(this.idPermis);
  }
  
  saveContravention() {
  
    this.contravention=this.myform.value;
    this.contravention.permis = this.permis_;

    this.service.AddContravention(this.contravention).subscribe({
      next:resp => {
        this.message = "Success !";
        this.route.navigateByUrl("/allContravention")

      },
      error:error => {
        console.log(error);
        this.message = error;
      }
  });
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

}
