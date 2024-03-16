import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { ProductsEffects } from './effects/products.effects';
import { CartEffects } from './effects/cart.effects';
import { cartReducer, loadingReducer, productReducer } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot({ products: productReducer, cart: cartReducer, isLoading: loadingReducer  }),
    EffectsModule.forRoot([ProductsEffects, CartEffects]),
  ],
  exports: [NgrxStoreModule]
})
export class StoreModule { }
