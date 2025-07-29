import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-registration-form',
  imports:[ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent {
  userForm: FormGroup;
  showSuccess = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      age: [''],
      gender: [''],
      dob: [''],
      phone: [''],
      address: [''],
      country: [''],
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.http.post('http://localhost:3000/students', this.userForm.value).subscribe({
        next: (res) => {
          console.log("Saved!", res);
          this.showSuccess = true;
          this.userForm.reset();
          
          // Hide the success message after 3 seconds
          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
        },
        error: (err) => {
          console.error("Error saving data", err);
        }
      });     
    }
  }
}
