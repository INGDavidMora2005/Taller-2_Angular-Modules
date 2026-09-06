import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../services/cursos';
import { Curso } from '../../interfaces/curso.interface';

@Component({
  selector: 'app-cursos-page',
  standalone: false,
  templateUrl: './cursos-page.html',
  styleUrl: './cursos-page.scss',
})
export class CursosPage implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursosService: Cursos) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
