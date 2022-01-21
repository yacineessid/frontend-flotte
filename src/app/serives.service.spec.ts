import { TestBed } from '@angular/core/testing';

import { CondService } from './services/CondService';

describe('SerivesService', () => {
  let service: CondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
