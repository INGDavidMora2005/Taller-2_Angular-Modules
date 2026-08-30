import { Empleado } from '../../modules/empleados/interfaces/empleado.interface';

/**
 * Origen de datos del módulo empleados.
 *
 * @remarks
 * Esta constante representa el conjunto de empleados disponibles
 * en el sistema. Es consumida desde el Core de la aplicación,
 * específicamente por el servicio {@link EmpleadosService},
 * para proporcionar información a los componentes del módulo.
 *
 * @type {Empleado[]}
 *
 * @example
 * ```ts
 * const empleados = EMPLEADOS_CONFIG;
 * console.log(empleados.length); // 6
 * ```
 */
export const EMPLEADOS_CONFIG: Empleado[] = [
  { id: 1, nombre: 'Andrea Gómez', cargo: 'Desarrolladora Frontend', area: 'TI', salario: 3200000 },
  { id: 2, nombre: 'Carlos Ruiz', cargo: 'Analista QA', area: 'TI', salario: 2800000 },
  { id: 3, nombre: 'Laura Fernández', cargo: 'Desarrolladora Backend', area: 'TI', salario: 3500000 },
  { id: 4, nombre: 'Miguel Ángel Torres', cargo: 'Líder de Proyecto', area: 'TI', salario: 4500000 },
  { id: 5, nombre: 'Valentina Ríos', cargo: 'Diseñadora UX/UI', area: 'Diseño', salario: 3000000 },
  { id: 6, nombre: 'Santiago Peña', cargo: 'DevOps Engineer', area: 'Infraestructura', salario: 3800000 }
];
