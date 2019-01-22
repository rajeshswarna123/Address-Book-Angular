import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {

  contacts : Contact[];
  selectedContact: Contact;
  constructor(private contactService : ContactService) {
    
   }

  onSelect(contact: Contact){
    this.selectedContact = contact;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }


}
