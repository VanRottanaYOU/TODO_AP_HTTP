import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AfficheMeteoComponent } from './affiche-meteo/affiche-meteo.component';
import { TodosService } from './services/TodosService';
import { TodoServicesObservable } from './services/TodoServicesObservable';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AfficheMeteoComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TodosService,
    TodoServicesObservable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
