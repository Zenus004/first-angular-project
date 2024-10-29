import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { USER_TASK } from '../../user-task';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.taskid !== id); // taskid instead of id
  }
  // name = input.required<string>();
  @Input() userId!: string;
  @Input() userName!: string;
  tasks = USER_TASK;

  get userTasks() {
    return this.tasks.filter(task => task.userid === this.userId);
  }
}
