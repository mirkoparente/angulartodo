import { Component } from '@angular/core';
import { Todos } from './../../todos';
import { TodosService } from 'src/app/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTask:Partial<Todos> = new Todos("",false);
  messaggio:string=""
  todos:Todos[] = [];
  constructor(private todoSvc:TodosService,private router:Router) { }

  ngOnInit(){
    this.todoSvc.getTodos().then(todos => this.todos=todos);
  }

  creaTask(){
    this.todoSvc.createTodo(this.newTask).then(todos => this.todos.push(todos))
  ,

  this.messaggio="Task Creata"
  setInterval(()=>{
    this.messaggio=""
  },2000)
    this.newTask.title="";

  }

  completa(todos:Todos){
   this.todoSvc.completaTodo(todos)
   this.newTask.completed=true;

  }
  delete(todos:Todos){
    this.todoSvc.delete(todos).then(()=>{
      this.todos=this.todos.filter(todos=>todos.id!=this.newTask.id)
      this.messaggio="Task Deleted"
    })
  }


}
