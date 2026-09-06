import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPage } from './cursos-page';
import { Cursos } from '../../services/cursos';

describe('CursosPage', () => {
  let component: CursosPage;
  let fixture: ComponentFixture<CursosPage>;

  const mockCursos = [
    { id: 1, nombre: 'Curso Mock 1', docente: 'Docente 1', duracionHoras: 40, modalidad: 'Virtual' },
    { id: 2, nombre: 'Curso Mock 2', docente: 'Docente 2', duracionHoras: 50, modalidad: 'Presencial' }
  ];

  const mockCursosService = {
    getCursos: () => mockCursos
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosPage],
      providers: [
        { provide: Cursos, useValue: mockCursosService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() debería llenar la propiedad cursos con el resultado del servicio', () => {
    expect(component.cursos).toEqual(mockCursos);
    expect(component.cursos.length).toBe(2);
    expect(component.cursos[0].nombre).toBe('Curso Mock 1');
  });
});