/**
 * Representa un empleado dentro del sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de datos para un empleado,
 * incluyendo sus datos personales, profesionales y salariales.
 *
 * @example
 * ```ts
 * const empleado: Empleado = {
 *   id: 1,
 *   nombre: 'Ana López',
 *   cargo: 'Desarrolladora',
 *   area: 'TI',
 *   salario: 3500000
 * };
 * ```
 */
export interface Empleado {
  /**
   * Identificador único del empleado.
   *
   * @remarks
   * Debe ser un número entero positivo.
   */
  id: number;

  /**
   * Nombre completo del empleado.
   */
  nombre: string;

  /**
   * Cargo o puesto que ocupa el empleado.
   */
  cargo: string;

  /**
   * Área o departamento al que pertenece el empleado.
   */
  area: string;

  /**
   * Salario mensual del empleado.
   */
  salario: number;
}
