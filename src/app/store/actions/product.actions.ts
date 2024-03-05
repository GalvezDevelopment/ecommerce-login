import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/interfaces/product.interface';
import { generateActionTitle } from '../../utils/store.utils';

const getDescription = generateActionTitle('Product Component');

export const loadProducts = createAction(getDescription('Loading catalog'));
export const productsLoaded = createAction(getDescription('Catalog loaded'), props<{ catalog: Product[] }>());
