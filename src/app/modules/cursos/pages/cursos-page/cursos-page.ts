import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../services/cursos';
import { Curso } from '../../interfaces/curso.interface';

/**
 * Página principal del módulo cursos.
 *
 * @remarks
 * Este componente representa la vista principal del módulo cursos.
 * Su responsabilidad es obtener los datos de cursos a través del
 * servicio {@link Cursos} e interactuar con el componente
 * {@link TableCursos} para su renderización.
 *
 * @example
 * ```html
 * <app-cursos-page></app-cursos-page>
 * ```
 */
@Component({
  selector: 'app-cursos-page',
  standalone: false,
  templateUrl: './cursos-page.html',
  styleUrl: './cursos-page.scss',
})
export class CursosPage implements OnInit {
  /**
   * Listado de cursos a ser mostrados en la tabla.
   *
   * @remarks
   * Se inicializa vacío y se popula durante `ngOnInit`.
   */
  cursos: Curso[] = [];

  /**
   * Constructor del componente.
   *
   * @param {Cursos} cursosService - Servicio para obtener datos de cursos.
   */
  constructor(private cursosService: Cursos) {}

  /**
   * Inicializa los datos del componente.
   *
   * @remarks
   * Al momento de la inicialización, este método solicita los
   * cursos al servicio {@link Cursos} y los asigna
   * a la propiedad `cursos` para su posterior renderización.
   */
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}