import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProjectComponent } from './project/project.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
