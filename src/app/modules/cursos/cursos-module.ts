import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { TableCursos } from './components/table-cursos/table-cursos';
import { CursosPage } from './pages/cursos-page/cursos-page';


@NgModule({
  declarations: [
    TableCursos,
    CursosPage
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
