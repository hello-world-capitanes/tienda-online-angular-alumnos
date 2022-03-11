import { TestBed } from '@angular/core/testing';
import { SideBarServiceService } from './side-bar-service.service';

describe('SideBarServiceService', () => {
  let service: SideBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
