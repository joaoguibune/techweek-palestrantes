import { TestBed, inject } from '@angular/core/testing';

import { PalestrantesService } from './palestrantes.service';

describe('PalestrantesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalestrantesService]
    });
  });

  it('should be created', inject([PalestrantesService], (service: PalestrantesService) => {
    expect(service).toBeTruthy();
  }));
});
