import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  tasks = [];
  // desde ngModel
  taskValue = '';

  addTask() {
    // valor del input -> this.taskValue
    this.tasks.push(this.taskValue);
    this.taskValue = '';
  }
}
