import { TestBed } from '@angular/core/testing';

import { AdrenalineService } from './adrenaline.service';

describe('AdrenalineService', () => {
  let service: AdrenalineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdrenalineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
