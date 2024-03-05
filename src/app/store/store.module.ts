import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { ProductsEffects } from './services/products.effects';
import { CartEffects } from './services/cart.effects';
import { cartReducer, productReducer } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot({ products: productReducer, cart: cartReducer }),
    EffectsModule.forRoot([ProductsEffects, CartEffects]),
  ],
  exports: [NgrxStoreModule]
})
export class StoreModule { }
