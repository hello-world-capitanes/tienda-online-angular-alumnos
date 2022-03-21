import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/product/product-detail/product-detail.component.spec.ts
      declarations: [ProductDetailComponent]
=======
      declarations: [ SignInFormComponent ]
>>>>>>> develop:src/app/shared/components/sign-in-form/sign-in-form.component.spec.ts
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
