import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { Producto } from '../../interfaces/producto.interface';

/**
 * Página principal del módulo productos.
 *
 * @remarks
 * Este componente representa la vista principal del módulo productos.
 * Su responsabilidad es obtener los datos de productos a través del
 * servicio {@link Productos} e interactuar con el componente
 * {@link TableProductos} para su renderización.
 *
 * @example
 * ```html
 * <app-productos-page></app-productos-page>
 * ```
 */
@Component({
  selector: 'app-productos-page',
  standalone: false,
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.scss',
})
export class ProductosPage implements OnInit {
  /**
   * Listado de productos a ser mostrados en la tabla.
   *
   * @remarks
   * Se inicializa vacío y se popula durante `ngOnInit`.
   */
  productos: Producto[] = [];

  /**
   * Constructor del componente.
   *
   * @param {Productos} productosService - Servicio para obtener datos de productos.
   */
  constructor(private productosService: Productos) {}

  /**
   * Inicializa los datos del componente.
   *
   * @remarks
   * Al momento de la inicialización, este método solicita los
   * productos al servicio {@link Productos} y los asigna
   * a la propiedad `productos` para su posterior renderización.
   */
  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }
}
