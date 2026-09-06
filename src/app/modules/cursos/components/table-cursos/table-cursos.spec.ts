import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCursos } from './table-cursos';
import { Curso } from '../../interfaces/curso.interface';

describe('TableCursos', () => {
  let component: TableCursos;
  let fixture: ComponentFixture<TableCursos>;

  const mockCursos: Curso[] = [
    { id: 1, nombre: 'Curso Test Uno', docente: 'Docente Uno', duracionHoras: 40, modalidad: 'Virtual' },
    { id: 2, nombre: 'Curso Test Dos', docente: 'Docente Dos', duracionHoras: 60, modalidad: 'Presencial' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCursos);
    component = fixture.componentInstance;
    component.cursos = mockCursos;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
  });

  it('debería renderizar una fila por cada curso', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(mockCursos.length);
  });

  it('debería mostrar los datos del primer curso en la primera fila', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const firstRow = rows[0];
    const cells = firstRow.querySelectorAll('th, td');

    expect(cells[1].textContent.trim()).toBe(mockCursos[0].nombre);
    expect(cells[2].textContent.trim()).toBe(mockCursos[0].docente);
    expect(cells[4].textContent.trim()).toBe(mockCursos[0].modalidad);
  });
});