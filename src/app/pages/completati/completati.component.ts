import { Component } from '@angular/core';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent {

  todos:Todos[] = [];
  constructor(private todoSvc:TodosService) { }

  ngOnInit(){
    this.todoSvc.getTodos().then(todos => this.todos=todos);
  }

}
