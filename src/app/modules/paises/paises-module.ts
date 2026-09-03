import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing-module';
import { TablePaises } from './components/table-paises/table-paises';


@NgModule({
  declarations: [
    TablePaises
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
