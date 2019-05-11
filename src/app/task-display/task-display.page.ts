import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/tasks/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksServService } from '../services/tasks/tasks-serv.service';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.page.html',
  styleUrls: ['./task-display.page.scss'],
})
export class TaskDisplayPage implements OnInit {
  public taskId: number;
  public task: Task;
  
  constructor(private route: ActivatedRoute, 
              private tasksServ: TasksServService, 
              private router: Router) { }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.tasksServ.getTask(this.taskId);
  }

  delete(id: number) {
    this.tasksServ.deleteTask(id);
    this.router.navigateByUrl('/tasks');
  }
}
