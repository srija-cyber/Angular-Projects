import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../products-modelling';
import { ProductCartItemsComponent } from '../product-cart-items/product-cart-items.component';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCartItemsComponent], 
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent {

  constructor(private productService : ProductServicesService) { }
  searchQuery: string = '';
  selectedFilter: 'All' | 'In Stock' | 'Low Stock' = 'All'; 
  	// A TypeScript union type that restricts the variable to only accept one of these three exact strings.
    	// Sets the initial/default value of the variable.
  cart: Product[] = [];
  // productService: any;

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesFilter =
        this.selectedFilter === 'All' ||
        (this.selectedFilter === 'In Stock' && product.availabilityStatus === 'In Stock') ||
        (this.selectedFilter === 'Low Stock' && product.availabilityStatus === 'Low Stock');
      return matchesSearch && matchesFilter;
    });
  }

  setFilter(filter: 'All' | 'In Stock' | 'Low Stock') {
    this.selectedFilter = filter;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    console.log('Cart:', this.cart); 
  }

   products: Product[] = [];

   ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    })
   }

   
}
