import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import GithubApiService from "./services/github-api.service";
import { HttpClientModule } from '@angular/common/http';
import { AfficheMeteoComponent } from './affiche-meteo/affiche-meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficheMeteoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
