import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Paises } from './paises';
import { Pais } from '../interfaces/pais.interface';

describe('Paises', () => {
  let service: Paises;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://countries.dev/countries?fields=name,capital,region,population,flags';

  const mockPaises: Pais[] = [
    {
      name: 'Colombia',
      capital: 'Bogotá',
      region: 'Americas',
      population: 51516562,
      flags: { png: 'colombia.png', svg: 'colombia.svg' }
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Paises);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPaises() debería hacer una peticion GET a la URL de countries.dev', () => {
    service.getPaises().subscribe();

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPaises);
  });

  it('getPaises() debería retornar los paises entregados por la API', () => {
    let resultado: Pais[] = [];

    service.getPaises().subscribe((paises) => {
      resultado = paises;
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockPaises);

    expect(resultado).toEqual(mockPaises);
  });
});
