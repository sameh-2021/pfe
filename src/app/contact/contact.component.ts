import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{user} from './user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
public user: user = new user()

  constructor() { }

  ngOnInit(): void {
  }
public envoyer(contactForm:NgForm){
  console.log(contactForm.form);
  console.log('valeurs',JSON.stringify(contactForm.value));
  console.log('envoyer successful');
}


  
  
}
