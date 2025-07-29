import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

   UserData = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',  
    phone: '123-456-7890',
    address: '123 Main St, Springfield, USA'
  }
}
