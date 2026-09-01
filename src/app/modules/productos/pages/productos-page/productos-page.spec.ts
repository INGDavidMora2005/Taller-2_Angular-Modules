import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPage } from './productos-page';
import { TableProductos } from '../../components/table-productos/table-productos';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

describe('ProductosPage', () => {
  let component: ProductosPage;
  let fixture: ComponentFixture<ProductosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosPage, TableProductos, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('después de ngOnInit(), la propiedad productos debería estar poblada', () => {
    component.ngOnInit();
    expect(component.productos.length).toBeGreaterThan(0);
  });
});
