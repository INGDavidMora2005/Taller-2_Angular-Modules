import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing-module';
import { TableEmpleados } from './components/table-empleados/table-empleados';
import { EmpleadosPage } from './pages/empleados-page/empleados-page';


@NgModule({
  declarations: [
    TableEmpleados,
    EmpleadosPage
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
