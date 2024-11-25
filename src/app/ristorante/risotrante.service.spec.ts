import { TestBed } from '@angular/core/testing';

import { RisotranteService } from './risotrante.service';

describe('RisotranteService', () => {
  let service: RisotranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisotranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
