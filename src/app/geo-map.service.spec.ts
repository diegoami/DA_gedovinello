import { TestBed } from '@angular/core/testing';

import { GeoMapService } from './geo-map.service';

describe('GeoMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoMapService = TestBed.get(GeoMapService);
    expect(service).toBeTruthy();
  });
});
