import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterConducteurComponent } from './Conducteur/ajouter-conducteur/ajouter-conducteur.component';
import { DetailConducteurComponent } from './Conducteur/detail-conducteur/detail-conducteur.component';
import { ListerConducteurComponent } from './Conducteur/lister-conducteur/lister-conducteur.component';
import { UpdateConducteurComponent } from './Conducteur/update-conducteur/update-conducteur.component';
import { AjouterContraventionComponent } from './Contravention/ajouter-contravention/ajouter-contravention.component';
import { DetailContraventionComponent } from './Contravention/detail-contravention/detail-contravention.component';
import { ListerContraventionComponent } from './Contravention/lister-contravention/lister-contravention.component';
import { UpdateContraventionComponent } from './Contravention/update-contravention/update-contravention.component';
import { AjouterPermisComponent } from './Permis/ajouter-permis/ajouter-permis.component';
import { DetailPermisComponent } from './Permis/detail-permis/detail-permis.component';
import { ListerPermisComponent } from './Permis/lister-permis/lister-permis.component';
import { UpdatePermisComponent } from './Permis/update-permis/update-permis.component';
import {LoginComponent} from './login/login.component';
import { GuardGuard } from './Guard/guard.guard';



const routes: Routes = [
  {path: 'allConducteur', component:ListerConducteurComponent, canActivate:[GuardGuard] },
  {path: 'addConducteur', component:AjouterConducteurComponent, canActivate:[GuardGuard] },
  {path: 'editConducteur/:id', component:UpdateConducteurComponent, canActivate:[GuardGuard] },
  {path: 'detailConducteur/:id', component:DetailConducteurComponent, canActivate:[GuardGuard] },

  {path: 'allPermis', component:ListerPermisComponent, canActivate:[GuardGuard] },
  {path: 'addPermis', component:AjouterPermisComponent, canActivate:[GuardGuard] },
  {path: 'editPermis/:id', component:UpdatePermisComponent, canActivate:[GuardGuard] },
  {path: 'detailPermis/:id', component:DetailPermisComponent, canActivate:[GuardGuard] },

  {path: 'allContravention', component:ListerContraventionComponent, canActivate:[GuardGuard] },
  {path: 'addContravention', component:AjouterContraventionComponent, canActivate:[GuardGuard] },
  {path: 'editContravention/:id', component:UpdateContraventionComponent, canActivate:[GuardGuard] },
  {path: 'detailContravention/:id', component:DetailContraventionComponent, canActivate:[GuardGuard]} ,

  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:"login"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
