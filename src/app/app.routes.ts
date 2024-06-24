import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

export const routes: Routes = [
    {
        path:'/',
        title:'Todo List',
        component: TodoListComponent
    },
    {
        path: '/{:id}',
        title: "Todo Details",
        component: TodoItemComponent
    }
];
