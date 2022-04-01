import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmailComponent } from './modify-email.component';

describe('ModifyEmailComponent', () => {
  let component: ModifyEmailComponent;
  let fixture: ComponentFixture<ModifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
