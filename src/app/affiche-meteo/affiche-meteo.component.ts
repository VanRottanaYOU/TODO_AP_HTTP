import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Http }  from '@angular/http';
import { TodosService } from '../services/TodosService';
import { TodoServicesObservable } from '../services/TodoServicesObservable';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-affiche-meteo',
  templateUrl: './affiche-meteo.component.html',
  styleUrls: ['./affiche-meteo.component.css']
})
export class AfficheMeteoComponent implements OnInit {

  listeTodos: Array<Todo> = [];
  monTodo : Todo;
  todoTitle:string;
  todoId:number;
  monTodoId:number;

  constructor(private http :Http, private todosService:TodosService, private TodoServicesObservable:TodoServicesObservable) { }

  addTodo() {
    this.TodoServicesObservable.addTodo(this.todoTitle)
    .subscribe(response => response.json(),
               error => console.log(error),
               () => (this.TodoServicesObservable.getTodos()
                       .subscribe(response => {this.listeTodos=response.json()})
                      ) 
              );        
  }
  
  updateTodo(){
    this.TodoServicesObservable.getTodo(this.todoId)
    .subscribe(resTodo => this.monTodo=resTodo,
               error => console.log(error),
               ()=>(this.TodoServicesObservable.updateTodo(this.monTodo)
                     .subscribe(response => response.json(),
                                error => console.log(error),
                                 () => (this.TodoServicesObservable.getTodos()
                                         .subscribe(response => {this.listeTodos=response.json()})
                                       ) 
                                )
                    ) 
               );
  }

  deleteTodo(){
    this.TodoServicesObservable.getTodo(this.monTodoId)
    .subscribe(resTodo => this.monTodo=resTodo,
               error => console.log(error),
               ()=>(this.TodoServicesObservable.deleteTodo(this.monTodoId)
                     .subscribe(response => response.json(),
                                error => console.log(error),
                                 () => (this.TodoServicesObservable.getTodos()
                                         .subscribe(response => {this.listeTodos=response.json()})
                                       ) 
                                )
                    ) 
               );
  }

 /*  deleteAllTodo(){
    
  } */

  ngOnInit() {

    this.TodoServicesObservable.getTodos()
    .subscribe(response => response.json(),
    error => console.log(error),
    () => (this.TodoServicesObservable.getTodos()
            .subscribe(response => {this.listeTodos=response.json()})
           ) 
    );  

    console.log(" getTodo n° 3 "+this.TodoServicesObservable.getTodo(5)
    .subscribe(resTodo => this.monTodo=resTodo,
      error => console.log(error),
     ()=>console.log(this.monTodo))
    );

   /* this.TodoServicesObservable.getTodo(5)
    .subscribe(resTodo => this.monTodo=resTodo,
      error => console.log(error),
     ()=>(this.TodoServicesObservable.updateTodo(this.monTodo)
     .subscribe(response => {response.json()})
    ) 
    );*/

  }

}
