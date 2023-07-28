import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private url = ' http://localhost:3000/todo';

  constructor() {}

  getTodos(): Promise<Todos[]> {
    return fetch(this.url).then((res) => res.json());
  }

  getId(todo:Todos): Promise<Todos> {
    return fetch(this.url+'?id='+todo.id).then((res) => res.json());
  }

  createTodo(todo: Partial<Todos>): Promise<Todos> {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }

  completaTodo(todo: Partial<Todos>): Promise<Todos> {
    return fetch(this.url + '/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }
  delete(todo:Todos) {
    return fetch(this.url + '/' + todo.id, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
