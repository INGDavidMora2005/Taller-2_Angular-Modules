import { Curso } from '../../modules/cursos/interfaces/curso.interface';

/**
 * Origen de datos del módulo cursos.
 *
 * @remarks
 * Esta constante representa el conjunto de cursos disponibles
 * en el sistema. Es consumida desde el Core de la aplicación,
 * específicamente por el servicio {@link Cursos},
 * para proporcionar información a los componentes del módulo.
 *
 * @type {Curso[]}
 *
 * @example
 * ```ts
 * const cursos = CURSOS_CONFIG;
 * console.log(cursos.length); // 6
 * ```
 */
export const CURSOS_CONFIG: Curso[] = [
  { id: 1, nombre: 'Arquitectura de Software', docente: 'Jesús Mejía', duracionHoras: 64, modalidad: 'Presencial' },
  { id: 2, nombre: 'Bases de Datos II', docente: 'Andrea Salazar', duracionHoras: 48, modalidad: 'Presencial' },
  { id: 3, nombre: 'Desarrollo Web Avanzado', docente: 'Carlos Gómez', duracionHoras: 56, modalidad: 'Virtual' },
  { id: 4, nombre: 'Ingeniería de Requisitos', docente: 'Paola Ríos', duracionHoras: 40, modalidad: 'Presencial' },
  { id: 5, nombre: 'Sistemas Operativos', docente: 'Fernando Ortiz', duracionHoras: 48, modalidad: 'Virtual' },
  { id: 6, nombre: 'Redes de Computadores', docente: 'Diana Herrera', duracionHoras: 56, modalidad: 'Semipresencial' }
];