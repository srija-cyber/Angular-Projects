import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../../../../teacher-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports:[FormsModule,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  currentTeacher: Teacher = { name: '', subject: '', experience: 0 };
  isEditing = false;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  saveTeacher(): void {
    if (this.isEditing) {
      this.teacherService.updateTeacher(this.currentTeacher).subscribe(() => {
        this.loadTeachers();
        this.resetForm();
      });
    } else {
      this.teacherService.addTeacher(this.currentTeacher).subscribe(() => {
        this.loadTeachers();
        this.resetForm();
      });
    }
  }

  editTeacher(teacher: Teacher): void {
    this.currentTeacher = { ...teacher };
    this.isEditing = true;
  }

  deleteTeacher(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.loadTeachers();
    });
  }

  resetForm(): void {
    this.currentTeacher = { name: '', subject: '', experience: 0 };
    this.isEditing = false;
  }
}