import { Injectable } from '@angular/core';
import { Task } from 'src/app/classes/tasks/task';
import { Category } from 'src/app/classes/category/category';

@Injectable({
  providedIn: 'root'
})
export class TasksServService {
  private tasks: Task[] = [
    new Task(1, "Terminated the ionic app", "Test", 1),
    new Task(2, "Test", "Test", 2)
  ]

  constructor() { }

  getTasks(): Task[] {
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

  deleteTask(id: number) {
    this.tasks.forEach((task, index) => {
      if (task.id === id) {
        this.tasks.splice(index, 1);
      }
    });
  }
}
