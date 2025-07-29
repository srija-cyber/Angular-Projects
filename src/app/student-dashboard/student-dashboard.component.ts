import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../student-dashboard-pipes/filter.pipe';
import { GradePipe } from '../student-dashboard-pipes/grade.pipe';
import { WordCountPipe } from '../student-dashboard-pipes/word-count.pipe';
import { CapitalizePipe } from '../student-dashboard-pipes/capitalize.pipe';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FilterPipe,
    GradePipe,
    WordCountPipe,
    CapitalizePipe
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  searchText: string = '';

  students = [ 
    { name: 'sunil rathod', age: 22, course: 'angular development', joiningDate: '2024-08-01', fee: 25000, score: 85 },
    { name: 'meena verma', age: 21, course: 'web design basics', joiningDate: '2024-09-15', fee: 20000, score: 67 },
    { name: 'ajay singh', age: 23, course: 'fullstack dev', joiningDate: '2024-07-25', fee: 30000, score: 95 },
    {name : 'Srija', age: 17, course: 'mern stack', joiningDate: '2024-06-21', fee: 26000, score: 97 },
  ];
}