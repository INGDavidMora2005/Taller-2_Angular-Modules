import { Component, Input } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';

/**
 * Componente presentacional encargado de renderizar la tabla de cursos.
 *
 * @remarks
 * Este componente no gestiona el estado de los cursos;
 * únicamente recibe los datos a través del `@Input()` `cursos`
 * y los muestra en formato de tabla HTML.
 *
 * @example
 * ```html
 * <app-table-cursos [cursos]="cursos"></app-table-cursos>
 * ```
 */
@Component({
  selector: 'app-table-cursos',
  standalone: false,
  templateUrl: './table-cursos.html',
  styleUrl: './table-cursos.scss',
})
export class TableCursos {
  /**
   * Arreglo de cursos a renderizar en la tabla.
   *
   * @remarks
   * Recibido desde el componente padre {@link CursosPage}.
   * Si no se proporciona, se inicializa como un arreglo vacío.
   */
  @Input() cursos: Curso[] = [];
}