import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { ProductServicesService } from '../../product-services.service';

@Component({
  selector: 'app-error-handling',
  imports: [FormsModule,CommonModule],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.css'
})
export class ErrorHandlingComponent {
  user:any = {lastName:"Srija"};

  first !: number;
  second !: number;
  result !: number;
  errorMsg:any;

  products: any; 

  constructor(private productservice: ProductServicesService){
    try{
      console.log(this.user,name);
    }
    catch(err){
      console.error('Type Error');
    }
  }

  loadProducts() {
    this.callFunction(); 
  }

  callFunction(): void {
    console.log('aaaaaaaaaaaa');
    
    try {
      this.productservice.getProducts().subscribe(
        (data) => {
          this.products = data;
          console.log(this.products);
        }
      );
    }
     catch (error) {
      console.error('Unexpected error occurred:', error);
    }
  }



  divide(){
    try{
      if(this.second !== 0){
        this.result = this.first / this.second;
      } else {
        throw new Error('Not Divisible by Zero')
      }
    }
    catch(error){
      error = "Non Divisible By Zero";
      this.errorMsg=error;
      alert(this.errorMsg);
      console.log(this.errorMsg)
    }
  }

}
