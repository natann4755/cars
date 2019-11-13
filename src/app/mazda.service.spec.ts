import { TestBed } from '@angular/core/testing';

import { MazdaService } from './mazda.service';

describe('MazdaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazdaService = TestBed.get(MazdaService);
    expect(service).toBeTruthy();
  });
});
