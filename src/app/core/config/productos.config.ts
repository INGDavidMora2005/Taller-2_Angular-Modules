import { Producto } from '../../modules/productos/interfaces/producto.interface';

/**
 * Origen de datos del módulo productos.
 *
 * @remarks
 * Esta constante representa el conjunto de productos disponibles
 * en el sistema. Es consumida desde el Core de la aplicación,
 * específicamente por el servicio {@link ProductosService},
 * para proporcionar información a los componentes del módulo.
 *
 * @type {Producto[]}
 *
 * @example
 * ```ts
 * const productos = PRODUCTOS_CONFIG;
 * console.log(productos.length); // 6
 * ```
 */
export const PRODUCTOS_CONFIG: Producto[] = [
  { id: 1, nombre: 'Laptop HP 15', categoria: 'Electronica', precio: 2500000, stock: 15, disponible: true },
  { id: 2, nombre: 'Camiseta Nike Dri-FIT', categoria: 'Ropa', precio: 120000, stock: 30, disponible: true },
  { id: 3, nombre: 'Arroz Premium 5kg', categoria: 'Alimentos', precio: 45000, stock: 50, disponible: true },
  { id: 4, nombre: 'Sofá 3 Puestos', categoria: 'Hogar', precio: 1800000, stock: 5, disponible: true },
  { id: 5, nombre: 'Auriculares Bluetooth', categoria: 'Electronica', precio: 250000, stock: 0, disponible: false },
  { id: 6, nombre: 'Jeans Levi\'s 501', categoria: 'Ropa', precio: 180000, stock: 20, disponible: true }
];
