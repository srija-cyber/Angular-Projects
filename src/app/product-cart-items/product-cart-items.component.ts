import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../products-modelling';
import { StockHighlightDirective } from '../stock-highlight.directive';
@Component({
  selector: 'app-product-cart-items',
  standalone: true,
  imports: [CommonModule, FormsModule, StockHighlightDirective],
  templateUrl: './product-cart-items.component.html',
  styleUrls: ['./product-cart-items.component.css']
})
export class ProductCartItemsComponent {
  showFullDescription: boolean = false;

  toggleDescription() {
  this.showFullDescription = !this.showFullDescription;
  }

  @Input() product!: Product; // receives one product from parent

  @Output() addToCartEvent = new EventEmitter<Product>(); // sends product to parent

  addToCart() {
    this.addToCartEvent.emit(this.product); //Emits the product to parent when the button is clicked.
  }
}
