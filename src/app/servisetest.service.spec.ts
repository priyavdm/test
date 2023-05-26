import { TestBed } from '@angular/core/testing';

import { ServisetestService } from './servisetest.service';

describe('ServisetestService', () => {
  let service: ServisetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServisetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
