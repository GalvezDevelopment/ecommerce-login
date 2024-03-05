import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { CartItem } from '../../interfaces/cart-item.interface';
import { Product } from '../../interfaces/product.interface';
import { Response } from '../../interfaces/response.interface';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartMockService extends CartService {
  private _cart: CartItem[];

  constructor(private _http: HttpClient) {
    super(_http);
    this._cart = [];
  }

  override getCart(): Observable<Response<CartItem[]>> {
    return of({ status: HttpStatusCode.Ok, data: this._cart } as Response<CartItem[]>);
  }

  override addProduct(productId: string): Observable<Response<null>> {
    let { item: found } = this.getProductIndexById(productId);

    if (found) {
      if (found.stock > found.quantity) {
        found = { ...found, quantity: found.quantity + 1 };
      }
      return of({ status: HttpStatusCode.Ok } as Response<null>);
    }

    return this._http.get<Product[]>('products.json').pipe(
      tap((products: Product[]) => this._cart.push({ stock: Math.round(Math.random() * 10), quantity: 1, item: products.find(p => p.id === productId) } as CartItem)),
      map(() => ({ status: HttpStatusCode.Ok } as Response<null>))
    );
  }

  override removeProduct(productId: string): Observable<Response<null>> {
    let { index } = this.getProductIndexById(productId);
    if (index > -1) {
      this._cart = this._cart.filter(p => p.item.id !== productId);
    }
    return of({ status: index > -1 ? HttpStatusCode.Ok : HttpStatusCode.NotFound, error: index > -1 ? 'Item does not exist.' : '' } as Response<null>);
  }

  private getProductIndexById(productId: string): { index: number, item: CartItem } {
    const i = this._cart.findIndex(p => p.item.id === productId);
    return { index: i, item: this._cart[i] };
  }
}
