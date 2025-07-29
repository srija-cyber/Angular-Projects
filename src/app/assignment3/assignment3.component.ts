import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  students: { name: string; grade: string }[] = [];
  name: string = '';
  grade: string = '';

  addStudent() {
    const trimmedName = this.name.trim();
    const trimmedGrade = this.grade.trim().toUpperCase();

    if (!trimmedName || !trimmedGrade) {
      alert('Please enter both Name and Grade!');
      return;
    }

    this.students.push({ name: trimmedName, grade: trimmedGrade });
    this.name = '';
    this.grade = '';
  }
}
