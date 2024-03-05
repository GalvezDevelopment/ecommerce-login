import { CartItem } from "./cart-item.interface";
import { Product } from "./product.interface";

export interface GlobalState {
    products: Product[];
    cart: CartItem[];
}
