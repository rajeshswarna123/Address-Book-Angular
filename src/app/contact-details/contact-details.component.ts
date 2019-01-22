import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact : Contact;
  constructor(private contactService : ContactService, private route: ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contact = this.contactService.getContact(+params['id']);
   });
  }

  deleteContact(){
    if(confirm("Do you want to delete this contact ?")){
      this.contactService.removeContact(this.contact);
      this.router.navigate(['']);
    }
  }

}
