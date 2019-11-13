import { TestBed } from '@angular/core/testing';

import { ToyotaService } from './toyota.service';

describe('ToyotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToyotaService = TestBed.get(ToyotaService);
    expect(service).toBeTruthy();
  });
});
