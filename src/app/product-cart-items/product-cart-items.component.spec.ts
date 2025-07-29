import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartItemsComponent } from './product-cart-items.component';

describe('ProductCartItemsComponent', () => {
  let component: ProductCartItemsComponent;
  let fixture: ComponentFixture<ProductCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCartItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
