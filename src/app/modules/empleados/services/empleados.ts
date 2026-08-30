import { Injectable } from '@angular/core';
import { EMPLEADOS_CONFIG } from '../../../core/config/empleados.config';
import { Empleado } from '../interfaces/empleado.interface';

/**
 * Servicio encargado de gestionar los datos de empleados.
 *
 * @remarks
 * Este servicio actúa como fachada entre la configuración del Core
 * y los componentes del módulo empleados. Inicializa los datos
 * a partir de {@link EMPLEADOS_CONFIG} y los expone a través
 * del método {@link getEmpleados}.
 *
 * @example
 * ```ts
 * constructor(private empleadosService: Empleados) {}
 * this.empleadosService.getEmpleados();
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class Empleados {
  /**
   * Arreglo privado de empleados inicializado con la configuración del Core.
   *
   * @remarks
   * Los datos provienen de {@link EMPLEADOS_CONFIG} y no deben ser
   * modificados directamente desde los componentes.
   */
  private empleados: Empleado[] = EMPLEADOS_CONFIG;

  /**
   * Retorna el listado de empleados disponibles.
   *
   * @remarks
   * Este método proporciona acceso de solo lectura al arreglo interno,
   * permitiendo a los componentes obtener los datos sin modificarlos.
   *
   * @returns {Empleado[]} Arreglo de empleados configurados en el sistema.
   */
  getEmpleados(): Empleado[] {
    return this.empleados;
  }
}
