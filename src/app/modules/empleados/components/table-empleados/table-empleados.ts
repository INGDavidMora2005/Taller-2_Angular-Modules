import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';

/**
 * Componente presentacional encargado de renderizar la tabla de empleados.
 *
 * @remarks
 * Este componente no gestiona el estado de los empleados;
 * únicamente recibe los datos a través del `@Input()` `empleados`
 * y los muestra en formato de tabla HTML.
 *
 * @example
 * ```html
 * <app-table-empleados [empleados]="empleados"></app-table-empleados>
 * ```
 */
@Component({
  selector: 'app-table-empleados',
  standalone: false,
  templateUrl: './table-empleados.html',
  styleUrl: './table-empleados.scss',
})
export class TableEmpleados {
  /**
   * Arreglo de empleados a renderizar en la tabla.
   *
   * @remarks
   * Recibido desde el componente padre {@link EmpleadosPage}.
   * Si no se proporciona, se inicializa como un arreglo vacío.
   */
  @Input() empleados: Empleado[] = [];
}
