import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permis } from 'src/app/Models/Permis';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-lister-permis',
  templateUrl: './lister-permis.component.html',
  styleUrls: ['./lister-permis.component.css']
})
export class ListerPermisComponent implements OnInit {
  permis !: Permis[];
  constructor(private service:PermisService, private router : Router) { }

  ngOnInit(): void {
    this.getallPermis() 
  }
  getallPermis() {
    this.service.getPermis().subscribe({
      next: (response) => {
        this.permis = response;
      },
      error: err => {
        console.log(err);
      }});
  }

  delete(permis:Permis){
    this.service.deletePermis(permis.id).subscribe({
      next: resp=>{
        this.getallPermis();
      },
      error: err=>{
        console.log(err);
      }}
    );

  }

  detail(permis : Permis){
    this.router.navigateByUrl("/detailPermis/"+permis.id);
  }

  edit(permis : Permis){
    this.router.navigateByUrl("/editPermis/"+permis.id);
   } 

}
