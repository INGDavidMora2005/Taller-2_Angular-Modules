import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table-paises',
  standalone: false,
  templateUrl: './table-paises.html',
  styleUrl: './table-paises.scss',
})
export class TablePaises {
  @Input() paises: Pais[] = [];
}
