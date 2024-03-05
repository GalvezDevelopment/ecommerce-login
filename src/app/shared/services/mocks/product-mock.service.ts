import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { Response } from '../../interfaces/response.interface';
import { ProductService } from '../product.service';

@Injectable()
export class ProductMockService extends ProductService {

  constructor(private _httpSrv: HttpClient) {
    super(_httpSrv);
  }

  override getAll(): Observable<Response<Product[]>> {
    return this._httpSrv.get<Product[]>('./assets/products.json').pipe(
      map(products => ({ status: HttpStatusCode.Ok, data: products } as Response<Product[]>))
    );
  }

  override getById(productId: string): Observable<Response<Product>> {
    return this._httpSrv.get<Product[]>('./assets/products.json').pipe(
      map(products => ({ status: HttpStatusCode.Ok, data: products.find(p => p.id === productId) } as Response<Product>))
    );
  }
}
