import { Injectable } from '@angular/core';
import { EMPLEADOS_CONFIG } from '../../../core/config/empleados.config';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class Empleados {
  private empleados: Empleado[] = EMPLEADOS_CONFIG;

  getEmpleados(): Empleado[] {
    return this.empleados;
  }
}
