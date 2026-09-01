import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductos } from './table-productos';
import { Producto } from '../../interfaces/producto.interface';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

describe('TableProductos', () => {
  let component: TableProductos;
  let fixture: ComponentFixture<TableProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProductos, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar 3 filas cuando se asignan 3 productos', () => {
    const productosPrueba: Producto[] = [
      { id: 1, nombre: 'Producto A', categoria: 'Electronica', precio: 100000, stock: 10, disponible: true },
      { id: 2, nombre: 'Producto B', categoria: 'Ropa', precio: 50000, stock: 20, disponible: true },
      { id: 3, nombre: 'Producto C', categoria: 'Alimentos', precio: 30000, stock: 5, disponible: false }
    ];
    component.productos = productosPrueba;
    fixture.detectChanges();

    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(filas.length).toBe(3);
  });

  it('debería mostrar el nombre del primer producto en el DOM', () => {
    const productosPrueba: Producto[] = [
      { id: 1, nombre: 'Producto A', categoria: 'Electronica', precio: 100000, stock: 10, disponible: true },
      { id: 2, nombre: 'Producto B', categoria: 'Ropa', precio: 50000, stock: 20, disponible: true },
      { id: 3, nombre: 'Producto C', categoria: 'Alimentos', precio: 30000, stock: 5, disponible: false }
    ];
    component.productos = productosPrueba;
    fixture.detectChanges();

    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(filas[0].textContent).toContain('Producto A');
  });
});
