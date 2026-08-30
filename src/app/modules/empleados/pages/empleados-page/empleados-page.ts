import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../services/empleados';
import { Empleado } from '../../interfaces/empleado.interface';

/**
 * Página principal del módulo empleados.
 *
 * @remarks
 * Este componente representa la vista principal del módulo empleados.
 * Su responsabilidad es obtener los datos de empleados a través del
 * servicio {@link EmpleadosService} e interactuar con el componente
 * {@link TableEmpleados} para su renderización.
 *
 * @example
 * ```html
 * <app-empleados-page></app-empleados-page>
 * ```
 */
@Component({
  selector: 'app-empleados-page',
  standalone: false,
  templateUrl: './empleados-page.html',
  styleUrl: './empleados-page.scss',
})
export class EmpleadosPage implements OnInit {
  /**
   * Listado de empleados a ser mostrados en la tabla.
   *
   * @remarks
   * Se inicializa vacío y se popula durante `ngOnInit`.
   */
  empleados: Empleado[] = [];

  /**
   * Constructor del componente.
   *
   * @param {Empleados} empleadosService - Servicio para obtener datos de empleados.
   */
  constructor(private empleadosService: Empleados) {}

  /**
   * Inicializa los datos del componente.
   *
   * @remarks
   * Al momento de la inicialización, este método solicita los
   * empleados al servicio {@link EmpleadosService} y los asigna
   * a la propiedad `empleados` para su posterior renderización.
   */
  ngOnInit(): void {
    this.empleados = this.empleadosService.getEmpleados();
  }
}
