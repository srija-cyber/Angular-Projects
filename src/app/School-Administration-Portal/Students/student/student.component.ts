import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../../student-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports:[FormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  currentStudent: Student = { name: '', age: 0, grade: '' };
  isEditing = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  saveStudent(): void {
    if (this.isEditing) {
      this.studentService.updateStudent(this.currentStudent).subscribe(() => {
        this.loadStudents();
        this.resetForm();
      });
    } else {
      this.studentService.addStudent(this.currentStudent).subscribe(() => {
        this.loadStudents();
        this.resetForm();
      });
    }
  }

  editStudent(student: Student): void {
    this.currentStudent = { ...student };
    this.isEditing = true;
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }

  resetForm(): void {
    this.currentStudent = { name: '', age: 0, grade: '' };
    this.isEditing = false;
  }
}