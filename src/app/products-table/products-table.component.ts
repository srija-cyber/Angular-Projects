import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../products-modelling';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-products-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  products: Product[] = [];
  productForm: Product = {
    title: "",
    price: 0,
    description: "",
    category: "",
    brand: "",
    availabilityStatus: "",
    stock: 0,
    images: []
  }

  imageInputString: string = "";

  constructor(private productService: ProductServicesService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  addOrUpdateProduct(): void {
if (this.productForm.id != null) {
  // EDIT mode
  this.productService.editProducts(this.productForm.id, this.productForm as Product).subscribe(updatedProduct => {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    this.reset();
  });
} else {
  // ADD mode
  this.productService.addProducts(this.productForm as Product).subscribe(newProduct => {
    this.products.push(newProduct);
    this.reset();
  });
}

  }

  editProduct(product: Product) {
    this.productForm = { ...product };
    this.imageInputString = product.images.join(', ');
  }

  deleteProduct(id: number): void {
    if (id == null) return;
    this.productService.deleteProducts(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }

  reset() {
    this.productForm = {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      brand: "",
      availabilityStatus: "",
      stock: 0,
      images: [],
    };
    this.imageInputString = "";
  }
}
  


