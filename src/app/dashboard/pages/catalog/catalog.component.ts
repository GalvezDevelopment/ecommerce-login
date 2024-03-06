import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../../shared/interfaces/store.interface';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interfaces/product.interface';
import { selectCatalog } from '../../../store/selectors/product.selectors';
import { loadProducts } from '../../../store/actions/product.actions';
import { addProduct } from '../../../store/actions/cart.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private _store: Store<GlobalState>) {
    this.products$ = _store.select(selectCatalog);
  }

  ngOnInit(): void {
    this._store.dispatch(loadProducts());
  }

  addProduct(productId: string): void {
    this._store.dispatch(addProduct({ productId }));
  }
}
