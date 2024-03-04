import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

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
      }
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
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
