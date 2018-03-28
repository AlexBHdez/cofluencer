import { TestBed, inject } from '@angular/core/testing';

import { InitAuthGuardService } from './init-auth-guard.service';

describe('InitAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitAuthGuardService]
    });
  });

  it('should be created', inject([InitAuthGuardService], (service: InitAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
