import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthBarComponent } from './strength-bar.component';

describe('StrengthBarComponent', () => {
  let component: StrengthBarComponent;
  let fixture: ComponentFixture<StrengthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
