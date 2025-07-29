import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';

interface Task { //rather than separating the interface into a different file, we can keep it here for simplicity
  name: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed';
}

@Component({
  selector: 'app-task-manager',
  imports: [FormsModule,CommonModule,TaskListComponent],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  taskName: string = '';
  priority: 'high' | 'medium' | 'low' | null = null;
  tasks: Task[] = [];

  // Called when "Add Task" button is clicked
  addTask() {
    if (!this.taskName.trim() || !this.priority) {
      alert('Please enter task name and select priority.');
      return;
    }

    const newTask: Task = {
      name: this.taskName.trim(),
      priority: this.priority,
      status: 'pending'
    };

    this.tasks.push(newTask);

    // Clear the input fields
    this.taskName = '';
    this.priority = null;
  }

  // This will be triggered from child using @Output
  markTaskAsCompleted(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks[index].status = 'completed';
    }
  }
}
