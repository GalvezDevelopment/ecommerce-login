import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from '../../shared/services/product.service';
import { loadProducts, productsLoaded } from '../actions/product.actions';
import { exhaustMap, map } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';

@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() => this._actions$.pipe(
        ofType(loadProducts),
        exhaustMap(() => this._productSrv.getAll().pipe(
            map(response => productsLoaded({ catalog: response.data as Product[] }))
        ))
    ));

    constructor(private _actions$: Actions, private _productSrv: ProductService) { }
}