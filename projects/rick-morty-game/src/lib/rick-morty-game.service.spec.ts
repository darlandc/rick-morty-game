import { TestBed } from '@angular/core/testing';

import { RickMortyGameService } from './rick-morty-game.service';

describe('RickMortyGameService', () => {
  let service: RickMortyGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
