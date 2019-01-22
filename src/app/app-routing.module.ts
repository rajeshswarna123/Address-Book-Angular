import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactsComponent } from './contacts/contacts.component'
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AppComponent } from './app.component';

const routes : Routes=[
  { path: 'create', component: FormComponent },
  { path: 'edit/:id', component: FormComponent},
  { path: 'details/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
