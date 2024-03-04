import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: 'detail/:id',
        component: ItemDetailComponent
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('../checkout/checkout.module').then(m => m.CheckoutModule)
      },
    ]
  }
];

@NgModule({
  declarations: [
    CatalogComponent,
    ItemDetailComponent,
    DashboardComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
