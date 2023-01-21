import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contravention } from 'src/app/Models/Contravention';
import { ContraventionService } from 'src/app/Services/contravention.service';

@Component({
  selector: 'app-detail-contravention',
  templateUrl: './detail-contravention.component.html',
  styleUrls: ['./detail-contravention.component.css']
})
export class DetailContraventionComponent implements OnInit {
  contravention !: Contravention;
  message!:string;

  constructor(private service:ContraventionService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.getContravention(id);
  }

  getContravention(id:any){
    this.service.get1Contravention(id).subscribe({
      next:resp=>{
        this.contravention=resp
      },
      error:error=>{
        this.message=error;
      }
    })
  }

}
