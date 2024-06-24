import { Component, inject } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todoServiceService: TodoServiceService = inject(TodoServiceService);
  handleSubmit(title: string){
    this.todoServiceService.addTodo({id:uuid(), title: title, isComplete: false}); 
  }
}
