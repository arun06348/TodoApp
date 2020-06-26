import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoService {

  todos: Todo[];
  nextId: number;

  constructor() {
    this.todos = [ ];

    this.nextId = 0;
  }

  addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
  }

}
