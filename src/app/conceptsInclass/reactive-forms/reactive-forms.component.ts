import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactForm !: FormGroup //From Group will wrap
  constructor(private formBuilder:FormBuilder){
    this.reactForm = formBuilder.group({
      name:['', Validators.required,Validators.maxLength(5)],
      age:[''],
      email:[''],
      country:['']
    })
  }
  saveFormData(){
    console.log(this.reactForm)
    console.log('reactForm : ',this.reactForm.value);
  }
  // reset(){
  //   this.reactForm.reset();
  // }
}
