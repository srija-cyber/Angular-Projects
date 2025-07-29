import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  imports: [FormsModule,CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
    user = {
    firstName: '',
    lastName: '',
    email: '',
    age: null
  };
  saveData(form:any){
    console.log(form);

  }
}
