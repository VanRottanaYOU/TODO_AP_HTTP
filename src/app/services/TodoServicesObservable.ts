import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import Todo from '../classes/Todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoServicesObservable {

    API_BASE_URL: string = 'http://localhost:3000/';
    API_USERS: string = 'todos/';
     
    
    public getTodos() {
      return this.http.get(`${this.API_BASE_URL}${this.API_USERS}`)
      //.map(x=>x.json());
    }

    public getTodo(id:number):Observable<Todo>{
        return this.http.get(`${this.API_BASE_URL}${this.API_USERS}${id}`)
        .map(res=><Todo>res.json());
    }

    public addTodo(titleInput :string) {
        let monTodo = new Todo(null,titleInput);
        return this.http.post(`${this.API_BASE_URL}${this.API_USERS}`, monTodo);
        
    }

    public updateTodo(monTodo:Todo){
        monTodo.isDone = !monTodo.isDone;
        return this.http.put(`${this.API_BASE_URL}${this.API_USERS}${monTodo.id}`,monTodo);
    }

    public deleteTodo(todoId:number){
        return this.http.delete(`${this.API_BASE_URL}${this.API_USERS}${todoId}`);
    }

   /*  public deleteAllTodo(){

    } */
    


  constructor(private http: Http) { }

}
