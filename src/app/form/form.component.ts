import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  contact : Contact;
  constructor(private contactService : ContactService, private router: Router , private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id = +params.get('id');
      this.getContact(id);
    })
  }

  saveContact(){
    this.contactService.save(this.contact);
  }

  getContact(id){
      if(id === 0){
          this.contact = {
            id: null,
            name : null,
            email : null,
            mobile : null,
            landline : null,
            website : null,
            address : null
          }; 
      }
      else{
        this.contact = Object.assign({},this.contactService.getContact(id)) ;
      }
  }
}
