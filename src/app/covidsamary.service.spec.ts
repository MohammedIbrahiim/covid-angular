import { TestBed } from '@angular/core/testing';

import { CovidsamaryService } from './covidsamary.service';

describe('CovidsamaryService', () => {
  let service: CovidsamaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidsamaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
