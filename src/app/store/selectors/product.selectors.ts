import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../shared/interfaces/store.interface';

const feature = (state: GlobalState) => state.products;

export const selectCatalog = createSelector(feature, products => products);