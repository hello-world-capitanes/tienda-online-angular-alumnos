import { TestBed } from '@angular/core/testing';

import { ProductFilterService } from './product-filter.service';

describe('ProductFilterService', () => {
  let service: ProductFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
