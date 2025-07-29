import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smartdope',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './smartdope.component.html',
  styleUrls: ['./smartdope.component.css']
})
export class SmartdopeComponent {
  newTask: string = "";
  priority: string | null = null;
  newDue: string = "";

  tasks: any[] = [];

  addTasks() {
    if (this.newTask && this.priority && this.newDue) {
      this.tasks.push({
        name: this.newTask,
        priority: this.priority,
        dueDate: this.newDue,
        isCompleted: false
      });

      this.newTask = "";
      this.priority = null;
      this.newDue = "";
    }
  }

  toggleStatus(task: any) {
    task.isCompleted = !task.isCompleted;
  }

  isOverdue(task: any): boolean {
    const today = new Date();
    const due = new Date(task.dueDate);
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    return due < today && !task.isCompleted;
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.isCompleted).length;
  }

  get pendingCount(): number {
    return this.tasks.filter(t => !t.isCompleted).length;
  }
}
