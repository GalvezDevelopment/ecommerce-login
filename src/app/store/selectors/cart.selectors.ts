import { createSelector } from '@ngrx/store'
import { GlobalState } from '../../shared/interfaces/store.interface'

const feature = (state: GlobalState) => state.cart;

export const selectCart = createSelector(feature, cart => cart);