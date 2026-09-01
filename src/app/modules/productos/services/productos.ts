import { Injectable } from '@angular/core';
import { PRODUCTOS_CONFIG } from '../../../core/config/productos.config';
import { Producto } from '../interfaces/producto.interface';

/**
 * Servicio para gestionar productos.
 *
 * @remarks
 * Proporciona acceso sincrónico a los datos de productos definidos
 * en el Core de la aplicación. No consume APIs externas.
 */
@Injectable({
  providedIn: 'root',
})
export class Productos {
  /**
   * Arreglo privado de productos inicializado con la configuración del Core.
   *
   * @remarks
   * Los datos provienen de {@link PRODUCTOS_CONFIG} y no deben ser
   * modificados directamente desde los componentes.
   */
  private productos: Producto[] = PRODUCTOS_CONFIG;

  /**
   * Obtiene el listado completo de productos.
   *
   * @returns Array de objetos {@link Producto} disponibles en el sistema.
   */
  getProductos(): Producto[] {
    return this.productos;
  }
}