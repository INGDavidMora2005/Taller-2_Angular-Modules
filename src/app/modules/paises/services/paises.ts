import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

/**
 * Servicio encargado de consultar los datos de países.
 *
 * @remarks
 * Este servicio consume la API pública countries.dev a través de
 * {@link HttpClient}, solicitando únicamente los campos
 * `name,capital,region,population,flags` mediante el parámetro `fields`.
 * A diferencia de {@link Empleados} y {@link Productos}, los datos no
 * están precargados en el Core sino que se obtienen de forma asíncrona,
 * por lo que expone un `Observable` en lugar de un arreglo síncrono.
 *
 * @example
 * ```ts
 * constructor(private paisesService: Paises) {}
 * this.paisesService.getPaises().subscribe(paises => console.log(paises));
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class Paises {
  /**
   * URL base de la API countries.dev, limitada a los campos requeridos
   * por el módulo mediante el parámetro `fields`.
   */
  private readonly apiUrl = 'https://countries.dev/countries?fields=name,capital,region,population,flags';

  /**
   * Constructor del servicio.
   *
   * @param {HttpClient} http - Cliente HTTP usado para consultar la API countries.dev.
   */
  constructor(private http: HttpClient) {}

  /**
   * Consulta el listado de países disponibles en la API countries.dev.
   *
   * @remarks
   * Realiza una petición GET a {@link apiUrl}. La respuesta debe ser
   * manejada mediante `subscribe()`, ya que la petición es asíncrona.
   *
   * @returns {Observable<Pais[]>} Observable que emite el arreglo de países consultados.
   */
  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }
}
