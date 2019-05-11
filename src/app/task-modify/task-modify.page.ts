import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/tasks/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksServService } from '../services/tasks/tasks-serv.service';
import { Category } from '../classes/category/category';
import { CategoriesServService } from '../services/categories-serv.service';

@Component({
  selector: 'app-task-modify',
  templateUrl: './task-modify.page.html',
  styleUrls: ['./task-modify.page.scss'],
})
export class TaskModifyPage implements OnInit {
  public taskId: number;
  public task: Task;
  public newTask: Task;
  public categories: Category[]

  constructor(private route: ActivatedRoute, 
              private taskServ: TasksServService, 
              private categoryServ: CategoriesServService, 
              private router: Router) { }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskServ.getTask(this.taskId);
    this.categories = this.categoryServ.getCategories();
    this.newTask = new Task(this.task.id, 
                            this.task.title, 
                            this.task.description,
                            this.task.fkCategory.id);
     console.log(this.newTask);
  }

  modify() {
    console.log(this.newTask);
    this.taskServ.postTask(this.newTask);
    this.router.navigateByUrl('/tasks');
  }
}
