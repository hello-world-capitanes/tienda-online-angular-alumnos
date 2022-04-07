import { TestBed } from '@angular/core/testing';
import { AuthenticationApiInterceptor } from './authentication-api.interceptor';

describe('AuthenticationApiInterceptor', () => {
  let service: AuthenticationApiInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationApiInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
