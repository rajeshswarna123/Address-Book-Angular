import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    FormComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
