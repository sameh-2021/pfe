import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { patient } from './patient';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public patient : patient =new patient();

  constructor() { }

  ngOnInit(): void {
  }
 public connecter(connexionForm:NgForm){
   console.log(connexionForm.form);
   console.log('valeur',JSON.stringify(connexionForm.value));
    console.log('Bienvenue');

  }

}
