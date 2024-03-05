import { createReducer, on } from '@ngrx/store';
import { Product } from '../../shared/interfaces/product.interface';
import { productsLoaded } from '../actions/product.actions';

export const initialState: ReadonlyArray<Product> = [];

export const reducer = createReducer(
    initialState,
    on(productsLoaded, (state: ReadonlyArray<Product>, { catalog }) => [...catalog])
);