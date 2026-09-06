import { Injectable } from '@angular/core';
import { CURSOS_CONFIG } from '../../../core/config/cursos.config';
import { Curso } from '../interfaces/curso.interface';

/**
 * Servicio encargado de gestionar los datos de cursos.
 *
 * @remarks
 * Este servicio actúa como fachada entre la configuración del Core
 * y los componentes del módulo cursos. Inicializa los datos
 * a partir de {@link CURSOS_CONFIG} y los expone a través
 * del método {@link getCursos}.
 *
 * @example
 * ```ts
 * constructor(private cursosService: Cursos) {}
 * this.cursosService.getCursos();
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class Cursos {
  /**
   * Arreglo privado de cursos inicializado con la configuración del Core.
   *
   * @remarks
   * Los datos provienen de {@link CURSOS_CONFIG} y no deben ser
   * modificados directamente desde los componentes.
   */
  private cursos: Curso[] = CURSOS_CONFIG;

  /**
   * Retorna el listado de cursos disponibles.
   *
   * @remarks
   * Este método proporciona acceso de solo lectura al arreglo interno,
   * permitiendo a los componentes obtener los datos sin modificarlos.
   *
   * @returns {Curso[]} Arreglo de cursos configurados en el sistema.
   */
  getCursos(): Curso[] {
    return this.cursos;
  }
}