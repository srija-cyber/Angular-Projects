import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { School } from '../../../../school-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  imports:[FormsModule,CommonModule],
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools: School[] = [];
  currentSchool: School = { name: '', location: '', establishedYear: '' };
  isEditing = false;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools(): void {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }

  saveSchool(): void {
    if (this.isEditing) {
      this.schoolService.updateSchool(this.currentSchool).subscribe(() => {
        this.loadSchools();
        this.resetForm();
      });
    } else {
      this.schoolService.addSchool(this.currentSchool).subscribe(() => {
        this.loadSchools();
        this.resetForm();
      });
    }
  }

  editSchool(school: School): void {
    this.currentSchool = { ...school };
    this.isEditing = true;
  }

  deleteSchool(id: number): void {
    this.schoolService.deleteSchool(id).subscribe(() => {
      this.loadSchools();
    });
  }

  resetForm(): void {
    this.currentSchool = { name: '', location: '', establishedYear: '' };
    this.isEditing = false;
  }
}