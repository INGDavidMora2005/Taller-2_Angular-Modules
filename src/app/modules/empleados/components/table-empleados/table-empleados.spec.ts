import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpleados } from './table-empleados';

describe('TableEmpleados', () => {
  let component: TableEmpleados;
  let fixture: ComponentFixture<TableEmpleados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableEmpleados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmpleados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
