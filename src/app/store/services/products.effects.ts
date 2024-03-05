import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from '../../shared/services/product.service';

@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() => this._actions$.pipe());
    
    constructor(private _actions$: Actions, private _productSrv: ProductService) {}
}