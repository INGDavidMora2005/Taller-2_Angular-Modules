import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductos } from './table-productos';

describe('TableProductos', () => {
  let component: TableProductos;
  let fixture: ComponentFixture<TableProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
