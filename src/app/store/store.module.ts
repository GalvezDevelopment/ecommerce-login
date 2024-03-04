import { NgModule } from '@angular/core';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot({}, {})
  ],
  exports: [NgrxStoreModule]
})
export class StoreModule { }
