import { Injectable } from '@angular/core';
import { CURSOS_CONFIG } from '../../../core/config/cursos.config';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root',
})
export class Cursos {
  private cursos: Curso[] = CURSOS_CONFIG;

  getCursos(): Curso[] {
    return this.cursos;
  }
}
