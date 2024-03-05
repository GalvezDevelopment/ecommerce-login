import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../../shared/interfaces/store.interface';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interfaces/product.interface';
import { selectCatalog } from '../../../store/selectors/product.selectors';
import { loadProducts } from '../../../store/actions/product.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<GlobalState>) {
    this.products$ = store.select(selectCatalog);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
