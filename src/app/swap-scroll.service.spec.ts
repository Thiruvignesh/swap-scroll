import { TestBed } from '@angular/core/testing';

import { SwapScrollService } from './swap-scroll.service';

describe('SwapScrollService', () => {
  let service: SwapScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
