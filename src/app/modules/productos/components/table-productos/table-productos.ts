import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

/**
 * Componente presentacional encargado de renderizar la tabla de productos.
 *
 * @remarks
 * Este componente no gestiona el estado de los productos;
 * únicamente recibe los datos a través del `@Input()` `productos`
 * y los muestra en formato de tabla HTML.
 *
 * @example
 * ```html
 * <app-table-productos [productos]="productos"></app-table-productos>
 * ```
 */
@Component({
  selector: 'app-table-productos',
  standalone: false,
  templateUrl: './table-productos.html',
  styleUrl: './table-productos.scss',
})
export class TableProductos {
  /**
   * Arreglo de productos a renderizar en la tabla.
   *
   * @remarks
   * Recibido desde el componente padre {@link ProductosPage}.
   * Si no se proporciona, se inicializa como un arreglo vacío.
   */
  @Input() productos: Producto[] = [];
}
