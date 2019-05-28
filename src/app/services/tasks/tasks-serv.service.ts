import { Injectable } from '@angular/core';
import { Task } from 'src/app/classes/tasks/task';
import { Category } from 'src/app/classes/category/category';

@Injectable({
  providedIn: 'root'
})
export class TasksServService {
  public lastId = 2;
  private tasks: Task[] = [
    new Task(1, "Terminated the ionic app", "desc", 1),
    new Task(2, "Test", "Test", 2)
  ]

  constructor() { }

  getTasks(): Task[] {
    console.log(this.tasks);
    return this.tasks;
  }

  getTask(id: number): Task {
    let findTasks: Task;
    this.tasks.forEach(task => {
      if (task.id === id) {
        findTasks =  task;
      }
    });

    return findTasks;
  }

  postTask(newTask: Task) {
    this.tasks.forEach((task, index) => {
      if (task.id == newTask.id) {
        this.tasks[index] = newTask;
      }
    });
  }

  putTask(newTask: Task) {
    this.tasks.push(newTask);
    this.lastId ++; 
  }

  deleteTask(id: number) {
    this.tasks.forEach((task, index) => {
      if (task.id === id) {
        this.tasks.splice(index, 1);
      }
    });
  }
}
