import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class GithubApiService {

  API_BASE_URL: string = 'https://api.github.com/';
  API_USERS: string = 'users/';
  API_TOKEN:string = '?access_token=e1076a7ae33d12f07ae08476404c2ab7491a0e06';
  
  
  getUser(login:string) {
  return this.http.get(`${this.API_BASE_URL}${this.API_USERS}${login}${this.API_TOKEN}`);
  }


  constructor(private http: HttpClient) { }

}
