import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response.interface';
import { Product, ProductId } from '../interfaces/product.interface';
import { ProductMockService } from './mocks/product-mock.service';

@Injectable({
  providedIn: 'root',
  useClass: ProductMockService
})
export class ProductService {
  private readonly URL = 'http://localhost:3000/product';

  constructor(protected _httpClient: HttpClient) { }

  getAll(): Observable<Response<Product[]>> {
    return this._httpClient.get<Response<Product[]>>(`${ this.URL }`);
  }

  getById(productId: ProductId): Observable<Response<Product>> {
    return this._httpClient.get<Response<Product>>(`${ this.URL }/${ productId }`);
  }
}
