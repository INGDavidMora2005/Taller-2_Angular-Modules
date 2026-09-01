/**
 * Representa un producto dentro del sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de datos para un producto,
 * incluyendo su identificación, categoría, precio y disponibilidad.
 *
 * @example
 * ```ts
 * const producto: Producto = {
 *   id: 1,
 *   nombre: 'Laptop',
 *   categoria: 'Electronica',
 *   precio: 2500000,
 *   stock: 10,
 *   disponible: true
 * };
 * ```
 */
export interface Producto {
  /**
   * Identificador único del producto.
   *
   * @remarks
   * Debe ser un número entero positivo.
   */
  id: number;

  /**
   * Nombre del producto.
   */
  nombre: string;

  /**
   * Categoría a la que pertenece el producto.
   */
  categoria: CategoriaProducto;

  /**
   * Precio del producto.
   */
  precio: number;

  /**
   * Cantidad de unidades disponibles en inventario.
   */
  stock: number;

  /**
   * Indica si el producto está disponible para la venta.
   */
  disponible: boolean;
}

/**
 * Categorías posibles para un producto.
 */
export type CategoriaProducto = 'Electronica' | 'Hogar' | 'Ropa' | 'Alimentos';
