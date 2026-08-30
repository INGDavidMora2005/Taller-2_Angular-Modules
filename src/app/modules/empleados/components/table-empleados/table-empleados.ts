import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-table-empleados',
  standalone: false,
  templateUrl: './table-empleados.html',
  styleUrl: './table-empleados.scss',
})
export class TableEmpleados {
  @Input() empleados: Empleado[] = [];
}
