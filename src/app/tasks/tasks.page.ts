import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/tasks/task';
import { TasksServService } from '../services/tasks/tasks-serv.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Task[]
  
  constructor(private tasksServ: TasksServService) {
   }

  ngOnInit() {
    this.tasks = this.tasksServ.getTasks();
  }
}
