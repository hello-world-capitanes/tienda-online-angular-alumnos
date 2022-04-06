import { TestBed } from '@angular/core/testing';

import { AuthFirebaseauthService } from './auth-firebaseauth.service';

describe('AuthFirebaseauthService', () => {
  let service: AuthFirebaseauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFirebaseauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
