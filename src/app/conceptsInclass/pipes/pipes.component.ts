import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustompipesPipe } from '../../custompipes.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule,CustompipesPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
    currentData: Date = new Date();
    search: string ="";

    
    students:any = [
      {
        name:'John Doe',age:'14'
      },
      {
        name:'Jane Smiller',age:'18'
      },
      {
        name:'Emily Syrus',age:'18'
      },
      {
        name:'Donna Smith',age:'19'
      },
      {
        name:'Jamie snowell',age:'14'
      },
      {
        name:'Rogwart Descason',age:'18'
      },
      {
        name:'Ruby Dashlin',age:'18'
      }
    ]

    constructor(){
      console.log(this.students.filter((student:any) => student.age === 18));
    }
}
