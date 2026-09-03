/**
 * Representa un país obtenido desde la API countries.dev.
 *
 * @remarks
 * Esta interfaz define la estructura de datos de un país tal como la
 * retorna la API pública countries.dev, limitada a los campos
 * `name,capital,region,population,flags` mediante el parámetro `fields`
 * de la petición. Generada a partir de una muestra real de la API
 * usando quicktype.io.
 *
 * @example
 * ```ts
 * const pais: Pais = {
 *   name: 'Colombia',
 *   capital: 'Bogotá',
 *   region: 'Americas',
 *   population: 51516562,
 *   flags: { png: '...', svg: '...' }
 * };
 * ```
 */
export interface Pais {
  /**
   * Nombre común del país.
   */
  name: string;

  /**
   * Ciudad capital del país.
   */
  capital: string;

  /**
   * Región geográfica a la que pertenece el país.
   */
  region: string;

  /**
   * Número de habitantes del país.
   */
  population: number;

  /**
   * Enlaces a las imágenes de la bandera del país.
   */
  flags: Flags;
}

/**
 * URLs de la bandera de un país, en distintos formatos de imagen.
 */
export interface Flags {
  /**
   * URL de la bandera en formato PNG.
   */
  png: string;

  /**
   * URL de la bandera en formato SVG.
   */
  svg: string;
}
