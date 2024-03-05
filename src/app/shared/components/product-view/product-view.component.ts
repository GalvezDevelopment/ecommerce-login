import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, ProductView } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  @Input() viewType: ProductView = 'ProductView';
  @Input({ required: true }) product!: Product;
  @Output() select = new EventEmitter<string>();
}
