import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { TableProductos } from './components/table-productos/table-productos';
import { ProductosPage } from './pages/productos-page/productos-page';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    TableProductos,
    ProductosPage
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
