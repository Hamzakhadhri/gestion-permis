import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Permis } from 'src/app/Models/Permis';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-detail-permis',
  templateUrl: './detail-permis.component.html',
  styleUrls: ['./detail-permis.component.css']
})
export class DetailPermisComponent implements OnInit {
  currentPermis ! : Permis;
  messsage!:string;
  constructor(private service : PermisService, private activeRoute : ActivatedRoute){ }

  ngOnInit(): void {
    let id=this.activeRoute.snapshot.paramMap.get('id');
    this.getPermis(id)
  }

  getPermis(id:any){
    this.service.get1Permis(id).subscribe({
      next:(res)=>{
        this.currentPermis=res
      },
      error:err=>{
       this.messsage=err
      }
      
      
    })
  }

}
