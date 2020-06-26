import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todobody',
  templateUrl: './todobody.component.html',
  styleUrls: ['./todobody.component.scss']
})
export class TodobodyComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

   removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

}
