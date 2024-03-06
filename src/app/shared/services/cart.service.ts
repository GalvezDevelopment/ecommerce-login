import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item.interface';
import { ProductId } from '../interfaces/product.interface';
import { Response } from '../interfaces/response.interface';
import { CartMockService } from './mocks/cart-mock.service';

@Injectable({
  providedIn: 'root',
  useExisting: CartMockService
})
export class CartService {
  private readonly URL = 'http://localhost:3000/cart';

  constructor(private _httpClient: HttpClient) { }

  addProduct(productId: ProductId): Observable<Response<null>> {
    return this._httpClient.post<Response<null>>(`${ this.URL }`, { productId });
  }
  
  getCart(): Observable<Response<CartItem[]>> {
    return this._httpClient.get<Response<CartItem[]>>(`${ this.URL }`);
  }

  removeProduct(productId: string): Observable<Response<null>> {
    return this._httpClient.delete<Response<null>>(`${ this.URL }`)
  }
}
