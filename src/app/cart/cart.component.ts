import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../shared/interfaces/cart-item.interface';
import { Store } from '@ngrx/store';
import { GlobalState } from '../shared/interfaces/store.interface';
import { selectCart, selectCartTotal } from '../store/selectors/cart.selectors';
import { ProductId } from '../shared/interfaces/product.interface';
import { removeProduct } from '../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(private _store: Store<GlobalState>) {
    this.cartItems$ = _store.select(selectCart);
    this.cartTotal$ = _store.select(selectCartTotal)
  }

  remove(productId: ProductId): void {
    this._store.dispatch(removeProduct({ productId }));
  }
}
