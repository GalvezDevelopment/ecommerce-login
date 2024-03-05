import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Response } from '../../interfaces/response.interface';
import { Product } from '../../interfaces/product.interface';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService extends ProductService {

  constructor(private _httpSrv: HttpClient) {
    super(_httpSrv);
  }

  override getAll(): Observable<Response<Product[]>> {
    return this._httpSrv.get<Product[]>('products.json').pipe(
      map(products => ({ status: HttpStatusCode.Ok, data: products } as Response<Product[]>))
    );
  }

  override getById(productId: string): Observable<Response<Product>> {
    return this._httpSrv.get<Product[]>('products.json').pipe(
      map(products => ({ status: HttpStatusCode.Ok, data: products.find(p => p.id === productId) } as Response<Product>))
    );
  }
}
