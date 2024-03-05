import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CartService } from '../../shared/services/cart.service';
import { cartLoaded, loadCart } from '../actions/cart.actions';
import { exhaustMap, map } from 'rxjs';
import { CartItem } from '../../shared/interfaces/cart-item.interface';

@Injectable()
export class CartEffects {
    loadCart$ = createEffect(() => this._actions$.pipe(
        ofType(loadCart),
        exhaustMap(() => this._cartSrv.getCart().pipe(
            map(response => cartLoaded({ cart: response.data as CartItem[] }))
        ))
    ));

    constructor(private _actions$: Actions, private _cartSrv: CartService) {}
}