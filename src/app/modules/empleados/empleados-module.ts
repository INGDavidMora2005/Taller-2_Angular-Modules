import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing-module';
import { TableEmpleados } from './components/table-empleados/table-empleados';


@NgModule({
  declarations: [
    TableEmpleados
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
