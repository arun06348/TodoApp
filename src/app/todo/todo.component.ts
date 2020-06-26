import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

   addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
