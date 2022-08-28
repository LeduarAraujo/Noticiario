import { TestBed } from '@angular/core/testing';

import { PelandoService } from './pelando.service';

describe('PelandoService', () => {
  let service: PelandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
