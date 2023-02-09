import { TestBed } from '@angular/core/testing';

import { UseersService } from './useers.service';

describe('UseersService', () => {
  let service: UseersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
