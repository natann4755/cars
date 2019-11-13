import { TestBed } from '@angular/core/testing';

import { MertzedesService } from './mertzedes.service';

describe('MertzedesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MertzedesService = TestBed.get(MertzedesService);
    expect(service).toBeTruthy();
  });
});
