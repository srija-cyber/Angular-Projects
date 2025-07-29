import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../products-modelling';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http: HttpClient) { }
    private apiUrl = 'http://localhost:3000/products';


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

    addProducts(product : Product): Observable<Product>{
      return this.http.post<Product>(this.apiUrl,product);
    }
  
    editProducts(id : Number, product : Product): Observable<Product>{
      return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
    }
  
    deleteProducts(id : Number){
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
