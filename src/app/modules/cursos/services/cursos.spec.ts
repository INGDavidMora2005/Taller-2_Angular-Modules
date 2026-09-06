import { TestBed } from '@angular/core/testing';

import { Cursos } from './cursos';

describe('Cursos', () => {
  let service: Cursos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cursos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCursos() debería retornar un arreglo', () => {
    const cursos = service.getCursos();
    expect(Array.isArray(cursos)).toBe(true);
  });

  it('getCursos() debería retornar exactamente 6 cursos', () => {
    const cursos = service.getCursos();
    expect(cursos).toHaveLength(6);
  });

  it('el primer curso debería tener el nombre "Arquitectura de Software"', () => {
    const cursos = service.getCursos();
    expect(cursos[0].nombre).toBe('Arquitectura de Software');
  });
});