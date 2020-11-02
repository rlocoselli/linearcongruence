import { TestBed, inject } from '@angular/core/testing';

import { LinearCongruenceService } from './linear-congruence-service.service';

describe('LinearCongruenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinearCongruenceServiceService]
    });
  });

  it('should be created', inject([LinearCongruenceService], (service: LinearCongruenceService) => {
    expect(service).toBeTruthy();
  }));
});
