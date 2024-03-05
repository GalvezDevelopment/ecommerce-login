import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product, ProductId } from '../interfaces/product.interface';
import { Response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly URL = 'http://localhost:3000/cart';

  constructor(private _httpClient: HttpClient) { }

  addProduct(productId: ProductId): Observable<Response<unknown>> {
    return this._httpClient.post<Response<unknown>>(`${ this.URL }`, { productId });
  }
  
  getCart(): Observable<Response<CartItem[]>> {
    return this._httpClient.get<Response<CartItem[]>>(`${ this.URL }`);
  }

  removeProduct(productId: string): Observable<Response<unknown>> {
    return this._httpClient.delete<Response<unknown>>(`${ this.URL }`)
  }
}
