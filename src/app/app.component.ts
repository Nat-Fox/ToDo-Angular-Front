import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tasks: string[] = [];
  // desde ngModel
  taskValue = '';
  url = 'http://localhost:8080';

  constructor(
    public http: HttpClient
  ) {
    this.getTasks();
    // this.getTasks().subscribe(result => {
    //   console.log(result);
    //   this.tasks = result;
    // },
    //   error => {
    //     console.log(<any>error);
    //   }
    // );
  }

  // llamada al servidor
  // getTasks (): Observable<any> {
  //   return this.http.get(this.url + '/api/todos');
  // }

  getTasks() {
    this.http.get(this.url + '/api/todos').subscribe((result: any) => {
      this.tasks = result;
    }, error => {
      console.log(error);
    });
  }

  addTask() {
    // valor del input -> this.taskValue
    this.tasks.push(this.taskValue);
    this.taskValue = '';
  }
}
