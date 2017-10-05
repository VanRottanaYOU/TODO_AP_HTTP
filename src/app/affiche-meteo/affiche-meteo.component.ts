import { Component, OnInit } from '@angular/core';
import GithubApiService from "../services/github-api.service";
import {HttpClient, HttpParams,HttpHeaders, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-affiche-meteo',
  templateUrl: './affiche-meteo.component.html',
  styleUrls: ['./affiche-meteo.component.css']
})
export class AfficheMeteoComponent implements OnInit {

  results: string;

  getGitHub(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.http.get("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1",{ headers })
    .subscribe(data => {this.results = data['name'];});
    return this.results;

    /*return this.http.get("https://api.github.com/users/vanrottanayou?access_token=e6142dfa0fe82e15704834b952eb9fab44583d00")
    .subscribe(data => {this.results = data['login'];});*/
    /*return this.GithubApiService.getUser('VanRottanaYOU')
    .subscribe(data => {this.results = data['login'];});*/
  }

  constructor(private GithubApiService:GithubApiService,private http: HttpClient) { }

  ngOnInit() {
  }

}
