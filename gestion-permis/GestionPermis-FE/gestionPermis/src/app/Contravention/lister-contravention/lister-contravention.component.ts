import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contravention } from 'src/app/Models/Contravention';
import { ContraventionService } from 'src/app/Services/contravention.service';

@Component({
  selector: 'app-lister-contravention',
  templateUrl: './lister-contravention.component.html',
  styleUrls: ['./lister-contravention.component.css']
})
export class ListerContraventionComponent implements OnInit {
  contravention!:Contravention[]
  constructor(private service:ContraventionService, private router:Router) { }

  ngOnInit(): void {
    this.getallContravention()
  }
  getallContravention() {
    this.service.getContraventions().subscribe({
      next: (response) => {
        this.contravention = response;
      },
      error: err => {
        console.log(err);
      }});
  }

  delete(contra:Contravention){
    this.service.deleteContravention(contra.id).subscribe({
      next: resp=>{
        this.getallContravention();
      },
      error: err=>{
        console.log(err);
      }}
    );

  }

  detail(contra : Contravention){
    this.router.navigateByUrl("/detailContravention/"+contra.id);
  }

  edit(contra : Contravention){
    this.router.navigateByUrl("/editContravention/"+contra.id);
   } 

}
