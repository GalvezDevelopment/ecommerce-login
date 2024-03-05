import { Product } from "./product.interface";

export interface CartItem {
    stock: number;
    item: Product;
}