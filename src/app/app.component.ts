import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Task from './Task';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tasks: Task[] = [];
  // desde ngModel
  taskValue = '';
  url = 'http://localhost:8080';

  constructor(
    public http: HttpClient
  ) {
    this.getTasks();
  }

  getTasks() {
    this.http.get(this.url + '/api/todos').subscribe((result: Task[]) => {
      this.tasks = result;
    }, error => {
      console.log(error);
    });
  }

  addTask() {
    this.postTask({
      name: this.taskValue
    });
  }

  postTask(task: Task) {
    this.http.post(this.url + '/api/todos', task).subscribe((responseTask: Task) => {
      this.tasks.push(responseTask);
      this.taskValue = '';
    });
  }
}
