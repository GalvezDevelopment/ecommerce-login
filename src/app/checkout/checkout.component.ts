import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GlobalState } from '../shared/interfaces/store.interface';
import { Observable } from 'rxjs';
import { selectCartTotal } from '../store/selectors/cart.selectors';
import { checkout } from '../store/actions/cart.actions';
import { selectLoading } from '../store/selectors/loading.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartTotal$: Observable<number>;
  isLoading$: Observable<boolean>;
  form: FormGroup;

  constructor(private _builder: FormBuilder, private _store: Store<GlobalState>) {
    this.form = this._builder.group({
      name: this._builder.control(null, { validators: [Validators.required] }),
      lastName: this._builder.control(null, { validators: [Validators.required] }),
      address: this._builder.control(null, { validators: [Validators.required, Validators.minLength(5)] })
    });

    this.cartTotal$ = _store.select(selectCartTotal);
    this.isLoading$ = _store.select(selectLoading);
  }

  pay(): void {
    if (this.form.valid) {
      this._store.dispatch(checkout());
    }
  }
}
