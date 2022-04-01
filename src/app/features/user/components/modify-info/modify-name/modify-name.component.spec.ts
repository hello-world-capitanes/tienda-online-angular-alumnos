import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNameComponent } from './modify-name.component';

describe('ModifyNameComponent', () => {
  let component: ModifyNameComponent;
  let fixture: ComponentFixture<ModifyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
