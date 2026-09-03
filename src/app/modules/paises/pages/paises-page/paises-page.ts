import { Component, OnInit } from '@angular/core';
import { Paises } from '../../services/paises';
import { Pais } from '../../interfaces/pais.interface';

/**
 * Página principal del módulo países.
 *
 * @remarks
 * Este componente representa la vista principal del módulo países.
 * Su responsabilidad es solicitar los datos de países al servicio
 * {@link Paises} e interactuar con el componente {@link TablePaises}
 * para su renderización. A diferencia de {@link EmpleadosPage} y
 * {@link ProductosPage}, la consulta es asíncrona, por lo que este
 * componente además controla los estados de carga y error mientras
 * se resuelve la petición HTTP.
 *
 * @example
 * ```html
 * <app-paises-page></app-paises-page>
 * ```
 */
@Component({
  selector: 'app-paises-page',
  standalone: false,
  templateUrl: './paises-page.html',
  styleUrl: './paises-page.scss',
})
export class PaisesPage implements OnInit {
  /**
   * Listado de países a ser mostrados en la tabla.
   *
   * @remarks
   * Se inicializa vacío y se popula al resolverse la petición HTTP en `ngOnInit`.
   */
  paises: Pais[] = [];

  /**
   * Indica si la petición a la API de países está en curso.
   *
   * @remarks
   * Se usa en la plantilla para mostrar un mensaje de carga mientras
   * la petición HTTP no ha sido resuelta.
   */
  cargando = false;

  /**
   * Indica si ocurrió un error al consultar la API de países.
   *
   * @remarks
   * Se usa en la plantilla para mostrar un mensaje de error en caso
   * de que la petición HTTP falle.
   */
  error = false;

  /**
   * Constructor del componente.
   *
   * @param {Paises} paisesService - Servicio para consultar los datos de países.
   */
  constructor(private paisesService: Paises) {}

  /**
   * Inicializa los datos del componente.
   *
   * @remarks
   * Al momento de la inicialización, este método solicita los países
   * al servicio {@link Paises}. Mientras la petición está en curso se
   * activa `cargando`; si la petición falla se activa `error`; si
   * tiene éxito, se asigna la respuesta a la propiedad `paises` para
   * su posterior renderización.
   */
  ngOnInit(): void {
    this.cargando = true;
    this.paisesService.getPaises().subscribe({
      next: (data) => { this.paises = data; this.cargando = false; },
      error: (err) => { console.error('Error al consultar la API', err); this.error = true; this.cargando = false; }
    });
  }
}
