import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  isActive = false;
  @Input({ required: true }) product!: Product;
  @Output() select = new EventEmitter<string>();
}
