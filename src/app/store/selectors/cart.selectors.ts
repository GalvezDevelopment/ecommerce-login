import { createSelector } from '@ngrx/store'
import { GlobalState } from '../../shared/interfaces/store.interface'

const feature = (state: GlobalState) => state.cart;

export const selectCart = createSelector(feature, cart => cart);
export const selectCartCount = createSelector(feature, cart => cart.reduce((prev, curr) => prev + curr.quantity, 0));