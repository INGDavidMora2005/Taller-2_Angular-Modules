import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { TableProductos } from './components/table-productos/table-productos';


@NgModule({
  declarations: [
    TableProductos
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
