import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../shared/interfaces/cart-item.interface';
import { ProductId } from '../../shared/interfaces/product.interface';
import { generateActionTitle } from '../../utils/store.utils';

const getTitle = generateActionTitle('Cart Component');

export const loadCart = createAction(getTitle('Loading'));
export const cartLoaded = createAction(getTitle('Loaded'), props<{ cart: CartItem[] }>());
export const removeProduct = createAction(getTitle('Remove product'), props<{ productId: ProductId }>());
export const empty = createAction(getTitle('Empty'));
export const checkout = createAction(getTitle('Checkout'));