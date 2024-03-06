import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProductMockService } from './services/mocks/product-mock.service';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { CartMockService } from './services/mocks/cart-mock.service';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    ProductViewComponent,
    ProductItemComponent,
    CartProductComponent
  ],
  providers: [ProductMockService, CartMockService],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ...materialModules,
    ProductViewComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      providers: [ProductMockService],
      ngModule: SharedModule
    } as ModuleWithProviders<SharedModule>;
  }
}
