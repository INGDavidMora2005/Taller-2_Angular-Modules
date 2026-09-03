import { Component, OnInit } from '@angular/core';
import { Paises } from '../../services/paises';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paises-page',
  standalone: false,
  templateUrl: './paises-page.html',
  styleUrl: './paises-page.scss',
})
export class PaisesPage implements OnInit {
  paises: Pais[] = [];
  cargando = false;
  error = false;

  constructor(private paisesService: Paises) {}

  ngOnInit(): void {
    this.cargando = true;
    this.paisesService.getPaises().subscribe({
      next: (data) => { this.paises = data; this.cargando = false; },
      error: (err) => { console.error('Error al consultar la API', err); this.error = true; this.cargando = false; }
    });
  }
}
