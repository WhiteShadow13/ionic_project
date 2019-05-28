import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/tasks/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksServService } from '../services/tasks/tasks-serv.service';
import { Category } from '../classes/category/category';
import { CategoriesServService } from '../services/categories-serv.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.page.html',
  styleUrls: ['./task-create.page.scss'],
})
export class TaskCreatePage implements OnInit {
  public newTask = new Task(this.taskServ.lastId +1, '', '', 1);
  public categories: Category[]

  constructor(private route: ActivatedRoute, 
              private taskServ: TasksServService, 
              private categoryServ: CategoriesServService, 
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryServ.getCategories();  
  }

  create() {
    this.taskServ.putTask(this.newTask);
    this.router.navigateByUrl('/tasks');
  }

}
