import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesSidebarComponent } from './product-categories-sidebar.component';

describe('ProductCategoriesSidebarComponent', () => {
  let component: ProductCategoriesSidebarComponent;
  let fixture: ComponentFixture<ProductCategoriesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoriesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
