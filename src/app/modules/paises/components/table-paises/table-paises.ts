import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

/**
 * Componente presentacional encargado de renderizar la tabla de países.
 *
 * @remarks
 * Este componente no gestiona el estado de los países; únicamente
 * recibe los datos a través del `@Input()` `paises` y los muestra en
 * formato de tabla HTML, incluyendo la bandera de cada país.
 *
 * @example
 * ```html
 * <app-table-paises [paises]="paises"></app-table-paises>
 * ```
 */
@Component({
  selector: 'app-table-paises',
  standalone: false,
  templateUrl: './table-paises.html',
  styleUrl: './table-paises.scss',
})
export class TablePaises {
  /**
   * Arreglo de países a renderizar en la tabla.
   *
   * @remarks
   * Recibido desde el componente padre {@link PaisesPage}.
   * Si no se proporciona, se inicializa como un arreglo vacío.
   */
  @Input() paises: Pais[] = [];

  /**
   * Oculta la imagen de la bandera si la URL falla al cargar.
   *
   * @remarks
   * Algunos países en la API traen URLs de bandera fuera del
   * CDN estándar (ej. enlaces directos a Wikipedia) que pueden
   * no cargar correctamente.
   */
  onFlagError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
