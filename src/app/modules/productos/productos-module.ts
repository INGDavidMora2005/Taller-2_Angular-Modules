import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { TableProductos } from './components/table-productos/table-productos';
import { ProductosPage } from './pages/productos-page/productos-page';


@NgModule({
  declarations: [
    TableProductos,
    ProductosPage
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
