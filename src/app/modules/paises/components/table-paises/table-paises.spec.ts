import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaises } from './table-paises';

describe('TablePaises', () => {
  let component: TablePaises;
  let fixture: ComponentFixture<TablePaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePaises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
