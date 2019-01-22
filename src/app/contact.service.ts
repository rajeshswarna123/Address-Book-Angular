import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  static count = 3;
  private contacts : Contact[] =[
    {id:1,name: 'Rajesh',email: 'rajesh@gmail.com',mobile: 9009009009, landline: 80008,website: 'rajesh.com',address:'Narasaraopet'},
    {id:2,name: 'Naveen',email: 'Naveen@gmail.com',mobile: 7007007007, landline: 60006,website: 'Naveen.com',address:'Guntur'},
    {id:3,name: 'Sai',email: 'Sai@gmail.com',mobile: 8008008008, landline: 40004,website: 'Sai.com',address:'Hyderabad'},
  ]

  constructor(private router : Router){

  }
  getContacts(){
    return this.contacts;
  }

  save(contact : Contact){
    if(contact.id === null){
      contact.id = ++ContactService.count;
      this.contacts.push(contact);
    }
    else{
      let index = this.contacts.findIndex(x => x.id === contact.id)
      this.contacts[index] = contact;
    }
    this.router.navigate(['']);
  }

  getContact(id : number){
    return this.contacts.find(x=>x.id == id);
  }

  removeContact(contact : Contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
