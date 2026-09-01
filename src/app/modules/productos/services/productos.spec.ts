import { TestBed } from '@angular/core/testing';

import { Productos } from './productos';

describe('Productos', () => {
  let service: Productos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProductos() debería retornar un arreglo', () => {
    const productos = service.getProductos();
    expect(Array.isArray(productos)).toBe(true);
  });

  it('getProductos() debería retornar exactamente 6 productos', () => {
    const productos = service.getProductos();
    expect(productos).toHaveLength(6);
  });

  it('el primer producto debería tener id 1 y nombre "Laptop HP 15"', () => {
    const productos = service.getProductos();
    expect(productos[0].id).toBe(1);
    expect(productos[0].nombre).toBe('Laptop HP 15');
  });
});
