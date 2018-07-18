import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GuestionListComponent } from './components/guestion-list/guestion-list.component';
import { DataservicesService } from './services/dataservices.service';
import { QuestionComponent } from './components/question/question.component';
import { AddQustionComponent } from './components/add-qustion/add-qustion.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestionListComponent,
    QuestionComponent,
    AddQustionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
