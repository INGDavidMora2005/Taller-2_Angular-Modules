import { TestBed } from '@angular/core/testing';

import { Empleados } from './empleados';

describe('Empleados', () => {
  let service: Empleados;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empleados);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmpleados() debería retornar un arreglo', () => {
    const empleados = service.getEmpleados();
    expect(Array.isArray(empleados)).toBe(true);
  });

  it('getEmpleados() debería retornar exactamente 6 empleados', () => {
    const empleados = service.getEmpleados();
    expect(empleados).toHaveLength(6);
  });

  it('el primer empleado debería tener el nombre "Andrea Gómez"', () => {
    const empleados = service.getEmpleados();
    expect(empleados[0].nombre).toBe('Andrea Gómez');
  });
});
