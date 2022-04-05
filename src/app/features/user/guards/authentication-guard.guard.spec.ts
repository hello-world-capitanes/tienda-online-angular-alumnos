import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardGuard } from './authentication-guard.guard';

describe('AuthenticationGuardGuard', () => {
  let guard: AuthenticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
