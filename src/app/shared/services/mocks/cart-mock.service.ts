import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, of, tap } from 'rxjs';
import { CartItem } from '../../interfaces/cart-item.interface';
import { Product } from '../../interfaces/product.interface';
import { Response } from '../../interfaces/response.interface';
import { CartService } from '../cart.service';
import { deepClone } from '../../../utils/clone';

@Injectable()
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
    let { index } = this.getProductIndexById(productId);

    if (index > -1) {
      const cartItem = { ...this._cart[index] };
      cartItem.quantity++;
      if (cartItem.stock > cartItem.quantity) {
        this._cart = [...this._cart];
        this._cart[index] = cartItem;
      }
      return of({ status: HttpStatusCode.Ok } as Response<null>);
    }

    return this._http.get<Product[]>('assets/products.json').pipe(
      tap((products: Product[]) => {
        const newItem = { stock: Math.round(Math.random() * 10), quantity: 1, item: products.find(p => p.id === productId) } as CartItem;
        this._cart = [...this._cart, newItem];
      }),
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

  override checkout(): Observable<Response<null>> {
    this._cart = [];
    return of({ status: HttpStatusCode.Ok } as Response<null>).pipe(delay(2000));
  }

  private getProductIndexById(productId: string): { index: number, item: CartItem | null } {
    const i = this._cart.findIndex(p => p.item.id === productId);
    return { index: i, item: i === -1 ? null : this._cart[i] };
  }
}
