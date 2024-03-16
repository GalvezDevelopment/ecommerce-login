import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../shared/interfaces/cart-item.interface';
import { ProductId } from '../../shared/interfaces/product.interface';
import { generateActionTitle } from '../../utils/store.utils';

const getTitle = generateActionTitle('Cart');

export const loadCart = createAction(getTitle('Loading'));
export const cartLoaded = createAction(getTitle('Loaded'), props<{ cart: CartItem[] }>());
export const addProduct = createAction(getTitle('Add Product'), props<{ productId: string }>());
export const removeProduct = createAction(getTitle('Remove product'), props<{ productId: ProductId }>());
export const empty = createAction(getTitle('Empty'));
export const checkout = createAction(getTitle('Checkout'));
export const checkoutCompleted = createAction(getTitle('Checkout complete'));