import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpleados } from './table-empleados';
import { Empleado } from '../../interfaces/empleado.interface';

describe('TableEmpleados', () => {
  let component: TableEmpleados;
  let fixture: ComponentFixture<TableEmpleados>;

  const mockEmpleados: Empleado[] = [
    { id: 1, nombre: 'Test Uno', cargo: 'Cargo Uno', area: 'Area Uno', salario: 1000000 },
    { id: 2, nombre: 'Test Dos', cargo: 'Cargo Dos', area: 'Area Dos', salario: 2000000 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableEmpleados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmpleados);
    component = fixture.componentInstance;
    component.empleados = mockEmpleados;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
  });

  it('debería renderizar una fila por cada empleado', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(mockEmpleados.length);
  });

  it('debería mostrar los datos del primer empleado en la primera fila', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const firstRow = rows[0];
    const cells = firstRow.querySelectorAll('th, td');

    expect(cells[1].textContent.trim()).toBe(mockEmpleados[0].nombre);
    expect(cells[2].textContent.trim()).toBe(mockEmpleados[0].cargo);
    expect(cells[3].textContent.trim()).toBe(mockEmpleados[0].area);
  });
});
