import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../shared/interfaces/store.interface';

const feature = (state: GlobalState) => state.isLoading;

export const selectLoading = createSelector(feature, state => state);