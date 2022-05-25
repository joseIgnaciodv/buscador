import { TestBed } from '@angular/core/testing';

import { AuthServicioService } from './auth-servicio.service';

describe('AuthServicioService', () => {
  let service: AuthServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
