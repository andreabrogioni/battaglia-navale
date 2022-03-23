import { TestBed } from '@angular/core/testing';

import { GestorePartitaService } from './gestore-partita.service';

describe('GestorePartitaService', () => {
  let service: GestorePartitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorePartitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
