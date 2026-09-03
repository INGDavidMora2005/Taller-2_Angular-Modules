import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaises } from './table-paises';
import { Pais } from '../../interfaces/pais.interface';

describe('TablePaises', () => {
  let component: TablePaises;
  let fixture: ComponentFixture<TablePaises>;

  const mockPaises: Pais[] = [
    { name: 'Colombia', capital: 'Bogotá', region: 'Americas', population: 51516562, flags: { png: 'colombia.png', svg: 'colombia.svg' } },
    { name: 'España', capital: 'Madrid', region: 'Europe', population: 47351567, flags: { png: 'espana.png', svg: 'espana.svg' } }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePaises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaises);
    component = fixture.componentInstance;
    component.paises = mockPaises;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
  });

  it('debería renderizar una fila por cada pais', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(mockPaises.length);
  });

  it('debería mostrar los datos del primer pais en la primera fila', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const firstRow = rows[0];
    const cells = firstRow.querySelectorAll('th, td');

    expect(cells[0].textContent.trim()).toBe(mockPaises[0].name);
    expect(cells[1].textContent.trim()).toBe(mockPaises[0].capital);
    expect(cells[2].textContent.trim()).toBe(mockPaises[0].region);
  });
});
