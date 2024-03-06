import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../../shared/interfaces/store.interface';
import { Observable } from 'rxjs';
import { selectCartCount } from '../../../store/selectors/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount$: Observable<number>;
  
  constructor(private _store: Store<GlobalState>) {
    this.cartCount$ = _store.select(selectCartCount);
  }
}
