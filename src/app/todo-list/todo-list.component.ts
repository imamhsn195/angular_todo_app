import { Component, Inject } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoServiceService){
    this.todos$ = this.todoService.todos$;
  }
  ngOnInit(): void{}

  markAsComplete(id:string){
    this.todoService.markAsComplete(id);
  }
  delete(id:string){
    this.todoService.deleteTodo(id);
  }
}
 