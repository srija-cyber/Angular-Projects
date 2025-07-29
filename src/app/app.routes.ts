import { Routes } from '@angular/router';
import { ProductsParentComponent } from './products-parent/products-parent.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { SmartdopeComponent } from './smartdope/smartdope.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HomeComponent } from './home/home.component';
import { AnimationsDemoComponent } from './animations-demo/animations-demo.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentComponent } from './School-Administration-Portal/Students/student/student.component';
import { TeacherComponent } from './School-Administration-Portal/Teachers/teacher/teacher.component';
import { SchoolComponent } from './School-Administration-Portal/School/school/school.component';
import { PrincipalComponent } from './School-Administration-Portal/Principal/principal/principal.component';
import { SchoolNavigationComponent } from './school-navigation/school-navigation.component';
import { DoopComponent } from './doop/doop.component';
import { TemperatureComponent } from './temperature/temperature.component';

export const routes: Routes = [
    {path : '', component:HomeComponent},
    {path : 'studentregistration',component:StudentRegistrationFormComponent},
    {path: 'products',component:ProductsParentComponent},
    {path: 'task-tracker',component:SmartdopeComponent},
    {path: 'students',component:Assignment3Component},
    {path: 'product-table',component:ProductsTableComponent},
    {path: 'task-manager', component:TaskManagerComponent},
    {path: 'animations', component:AnimationsDemoComponent},
    {path: 'student-dashboard', component:StudentDashboardComponent},
    {path: 'temp', component:TemperatureComponent},
    {path: 'school-navigation', component:SchoolNavigationComponent,
         children:[{path:'',component:DoopComponent},  { path: 'studentstwo', component: StudentComponent },
                    { path: 'teachers', component: TeacherComponent }, { path: 'schools', component: SchoolComponent },
                    { path: 'principals', component: PrincipalComponent },]}
];
