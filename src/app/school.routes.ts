import { Routes } from '@angular/router';
import { StudentComponent } from './School-Administration-Portal/Students/student/student.component';
import { TeacherComponent } from './School-Administration-Portal/Teachers/teacher/teacher.component';
import { SchoolComponent } from './School-Administration-Portal/School/school/school.component';
import { PrincipalComponent } from './School-Administration-Portal/Principal/principal/principal.component';
import { DoopComponent } from './doop/doop.component';

export const routes: Routes = [
  { path: '', component: DoopComponent }, // Remove the slash
  { path: 'studentstwo', component: StudentComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'schools', component: SchoolComponent },
  { path: 'principals', component: PrincipalComponent },
  { path: '**', redirectTo: '' } // Handle unknown routes
];
