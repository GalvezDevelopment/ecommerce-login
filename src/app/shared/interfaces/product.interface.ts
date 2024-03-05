export interface Product {
    id: string;
    title: string;
    price: string;
    imgUrl: string;
}

export type ProductId = Product['id'];