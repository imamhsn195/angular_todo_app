import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todos';
  tasks: Array<{status:Boolean, heading:string}> = [];
  addTask(heading:string){
    this.tasks.push({status:false, heading:heading});
  }
  toggleStatus(index:number){
    this.tasks[index].status = !this.tasks[index].status;
  }
}
