import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AcceuilComponent}from './acceuil/acceuil.component';
import{AProposComponent}from './a-propos/a-propos.component';
import {ContactComponent}from './contact/contact.component';
import{ConnexionComponent}from './connexion/connexion.component';
import{FormulaireComponent}from './formulaire/formulaire.component';
import{DoctorsComponent} from './doctors/doctors.component';
import{MedecinsComponent } from './medecins/medecins.component';
import{DashbordComponent} from './dashbord/dashbord.component';
const routes: Routes = [


  {path: '', component: AcceuilComponent },
  {path:"acceuil", component: AcceuilComponent},
  {path:"a-propos", component: AProposComponent},
  {path:"contact",component:ContactComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"formulaire",component:FormulaireComponent},
  {path:"doctors", component:DoctorsComponent},
  {path:"medecins",component:MedecinsComponent },
  {path:"dashbord",component:DashbordComponent},
  
  /*{path: '**', component: NOtFoundComponent}*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
