import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing-module';
import { TablePaises } from './components/table-paises/table-paises';
import { PaisesPage } from './pages/paises-page/paises-page';


@NgModule({
  declarations: [
    TablePaises,
    PaisesPage
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
