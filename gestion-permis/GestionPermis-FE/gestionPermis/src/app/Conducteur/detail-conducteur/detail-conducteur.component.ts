import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conducteur } from 'src/app/Models/Conducteur';
import { ConducteurService } from 'src/app/Services/conducteur.service';

@Component({
  selector: 'app-detail-conducteur',
  templateUrl: './detail-conducteur.component.html',
  styleUrls: ['./detail-conducteur.component.css']
})
export class DetailConducteurComponent implements OnInit {
  currentConducteur ! : Conducteur;
  constructor(private service : ConducteurService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activeRoute.snapshot.paramMap.get('id');
    
    this.service.get1Conducteur(id).subscribe({
      next:(res)=>{
        this.currentConducteur=res
      },
      error:err=>{
        console.log(err);
      }
      
      
    })
  }

}
