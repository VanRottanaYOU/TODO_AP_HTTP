import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import Todo from '../classes/Todo';

@Injectable()
export class TodosService {

    API_BASE_URL: string = 'http://localhost:3000/';
    API_USERS: string = 'todos/';
     
    
    public getTodosServer() {
      this.http.get(`${this.API_BASE_URL}${this.API_USERS}`)
      .subscribe(response=>{
        if(response.ok){
          console.log(response.status);
          console.log(response.headers);
          console.log(response);
        }else{
          console.log(response.text());
        }
      })
    }

    public sendToServer(monTodo:Todo){
        this.http.post(`${this.API_BASE_URL}${this.API_USERS}`,monTodo)
        .subscribe(response=>{  console.log(response.ok);  }      
            )      
    }
    


  constructor(private http: Http) { }

}
