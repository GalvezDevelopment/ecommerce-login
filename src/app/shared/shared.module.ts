import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ]
})
export class SharedModule { }
