import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  constructor() { }

  private todosObject = new BehaviorSubject<Todo[]>([]);

  todos$ = this.todosObject.asObservable();

  private todos: Todo[] = [];

  addTodo(_todo: Todo){
    this.todos.push(_todo);
    this.todosObject.next(this.todos);
  }
  getTodos(){
    return this.todos;
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id == id);
    this.todosObject.next(this.todos);
  }

  markAsComplete(id: string) {
    const todo = this.todos.find(todo => todo.id == id);
    if(todo){
      todo.isComplete = true;
      this.todosObject.next(this.todos);
    }
  }

}
