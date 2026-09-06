import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { PaisesPage } from './paises-page';
import { TablePaises } from '../../components/table-paises/table-paises';
import { Paises } from '../../services/paises';
import { Pais } from '../../interfaces/pais.interface';

describe('PaisesPage', () => {
  let component: PaisesPage;
  let fixture: ComponentFixture<PaisesPage>;

  const mockPaises: Pais[] = [
    {
      name: 'Colombia',
      capital: 'Bogotá',
      region: 'Americas',
      population: 51516562,
      flags: { png: 'colombia.png', svg: 'colombia.svg' }
    }
  ];

  const paisesServiceMock = {
    getPaises: jest.fn().mockReturnValue(of(mockPaises))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesPage, TablePaises],
      providers: [
        { provide: Paises, useValue: paisesServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() debería llamar al servicio y llenar paises', () => {
    expect(paisesServiceMock.getPaises).toHaveBeenCalled();
    expect(component.paises).toEqual(mockPaises);
    expect(component.cargando).toBe(false);
    expect(component.error).toBe(false);
  });

  it('debería manejar error de la API activando error=true y cargando=false', () => {
    const mockPaisesServiceConError = {
      getPaises: () => throwError(() => new Error('Error simulado'))
    };

    TestBed.resetTestingModule();

    return TestBed.configureTestingModule({
      declarations: [PaisesPage, TablePaises],
      providers: [
        { provide: Paises, useValue: mockPaisesServiceConError }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PaisesPage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(component.error).toBe(true);
      expect(component.cargando).toBe(false);
    });
  });
});