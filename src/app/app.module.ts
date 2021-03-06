import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedComponent } from './featured/featured.component';
import { AboutComponent } from './about/about.component';
import { CountComponent } from './count/count.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HeaderDashComponent } from './dashbord/header-dash/header-dash.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './dashbord/sidebar/sidebar.component';
import { WarpcontentComponent } from './dashbord/warpcontent/warpcontent.component';
import { DashComponent } from './dashbord/dash/dash.component';
import { DoctormangComponent } from './dashbord/doctormang/doctormang.component';
import { PatientmangComponent } from './dashbord/patientmang/patientmang.component';
import { ApptComponent } from './dashbord/appt/appt.component';
import { DoctorSCHComponent } from './dashbord/doctor-sch/doctor-sch.component';
import { DepartementComponent } from './dashbord/departement/departement.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FeaturedComponent,
    AboutComponent,
    CountComponent,
    MedecinsComponent,
    GallerieComponent,
    FooterComponent,
    AcceuilComponent,
    AProposComponent,
    ContactComponent,
    ConnexionComponent,
    FormulaireComponent,
    DashbordComponent,
    DoctorsComponent,
    HeaderDashComponent,
    SidebarComponent,
    WarpcontentComponent,
    DashComponent,
    DoctormangComponent,
    PatientmangComponent,
    ApptComponent,
    DoctorSCHComponent,
    DepartementComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
