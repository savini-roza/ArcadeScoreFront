import { TestBed } from '@angular/core/testing';

import { PontuacaoService } from './pontuacao.service';

describe('PontuacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PontuacaoService = TestBed.get(PontuacaoService);
    expect(service).toBeTruthy();
  });
});
