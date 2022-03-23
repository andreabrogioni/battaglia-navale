import { TestBed } from '@angular/core/testing';

import { GeneratoreNaviService } from './generatore-navi.service';

describe('GeneratoreNaviService', () => {
  let service: GeneratoreNaviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratoreNaviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
