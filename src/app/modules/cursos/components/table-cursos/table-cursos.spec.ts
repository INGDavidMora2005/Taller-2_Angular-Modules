import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCursos } from './table-cursos';

describe('TableCursos', () => {
  let component: TableCursos;
  let fixture: ComponentFixture<TableCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
