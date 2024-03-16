import { createReducer, on } from '@ngrx/store';
import { hiddenLoading, showLoading } from '../actions/loading.actions';

export const loadingState = false;

export const reducer = createReducer(
    loadingState,
    on(showLoading, state => true),
    on(hiddenLoading, state => false)
);