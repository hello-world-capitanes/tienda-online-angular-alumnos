import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitualesComponent } from './habituales.component';

describe('HabitualesComponent', () => {
  let component: HabitualesComponent;
  let fixture: ComponentFixture<HabitualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
