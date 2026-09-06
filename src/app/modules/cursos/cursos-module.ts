import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { TableCursos } from './components/table-cursos/table-cursos';


@NgModule({
  declarations: [
    TableCursos
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
