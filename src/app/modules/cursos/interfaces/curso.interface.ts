/**
 * Representa un curso académico dentro del sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de datos para un curso,
 * incluyendo su identificación, información académica y modalidad de impartición.
 *
 * @example
 * ```ts
 * const curso: Curso = {
 *   id: 1,
 *   nombre: 'Arquitectura de Software',
 *   docente: 'Jesús Mejía',
 *   duracionHoras: 64,
 *   modalidad: 'Presencial'
 * };
 * ```
 */
export interface Curso {
  /**
   * Identificador único del curso.
   *
   * @remarks
   * Debe ser un número entero positivo.
   */
  id: number;

  /**
   * Nombre completo del curso.
   */
  nombre: string;

  /**
   * Nombre del docente a cargo del curso.
   */
  docente: string;

  /**
   * Duración del curso en horas.
   */
  duracionHoras: number;

  /**
   * Modalidad de impartición del curso (Presencial, Virtual, Semipresencial).
   */
  modalidad: string;
}