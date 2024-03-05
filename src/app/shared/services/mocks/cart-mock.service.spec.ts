import { TestBed } from '@angular/core/testing';

import { CartMockService } from './cart-mock.service';

describe('CartMockService', () => {
  let service: CartMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
