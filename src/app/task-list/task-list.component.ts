import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed';
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() markComplete = new EventEmitter<Task>();

  onMarkCompleted(task: Task) {
    this.markComplete.emit(task);  // Send to parent
  }
}
