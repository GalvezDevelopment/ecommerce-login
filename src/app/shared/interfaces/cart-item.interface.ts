import { Product } from "./product.interface";

export interface CartItem {
    stock: number;
    quantity: number;
    item: Product;
}