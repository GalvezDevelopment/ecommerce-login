import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CartService } from '../../shared/services/cart.service';
import { addProduct, cartLoaded, checkout, checkoutCompleted, loadCart, removeProduct } from '../actions/cart.actions';
import { exhaustMap, map, tap } from 'rxjs';
import { CartItem } from '../../shared/interfaces/cart-item.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../shared/interfaces/store.interface';
import { hiddenLoading, showLoading } from '../actions/loading.actions';

@Injectable()
export class CartEffects {
    loadCart$ = createEffect(() => this._actions$.pipe(
        ofType(loadCart),
        exhaustMap(() => this._cartSrv.getCart().pipe(
            map(response => cartLoaded({ cart: response.data as CartItem[] }))
        ))
    ));

    addProduct$ = createEffect(() => this._actions$.pipe(
        ofType(addProduct),
        exhaustMap(action => this._cartSrv.addProduct(action.productId).pipe(
            map(() => loadCart())
        ))
    ));

    removeProduct$ = createEffect(() => this._actions$.pipe(
        ofType(removeProduct),
        exhaustMap(action => this._cartSrv.removeProduct(action.productId).pipe(
            map(() => loadCart())
        ))
    ));

    checkout$ = createEffect(() => this._actions$.pipe(
        ofType(checkout),
        tap(() => this.store.dispatch(showLoading())),
        exhaustMap(() => this._cartSrv.checkout().pipe(
            tap((() => this.store.dispatch(hiddenLoading()))),
            tap(() => this._router.navigateByUrl('/'))
        ))
    ), { dispatch: false });

    constructor(private _actions$: Actions, private _cartSrv: CartService, private _router: Router, private store: Store<GlobalState>) { }
}