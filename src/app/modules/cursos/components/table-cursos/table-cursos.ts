import { Component, Input } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';

@Component({
  selector: 'app-table-cursos',
  standalone: false,
  templateUrl: './table-cursos.html',
  styleUrl: './table-cursos.scss',
})
export class TableCursos {
  @Input() cursos: Curso[] = [];
}
