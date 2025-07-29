import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-2',
  imports: [],
  templateUrl: './assignment-2.component.html',
  styleUrls: ['./assignment-2.component.css']
})
export class Assignment2Component {
  name : string = "John";
  subject: string = "Maths"; 
  testScore1: number = 49;
  testScore2: number = 49;
  totalScore: number = 97;
}
