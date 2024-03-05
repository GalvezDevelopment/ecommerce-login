import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../shared/interfaces/cart-item.interface';
import { cartLoaded } from '../actions/cart.actions';

export const initialState: ReadonlyArray<CartItem> = [];

export const reducer = createReducer(
    initialState,
    on(cartLoaded, (state, { cart }) => [...cart])
);
