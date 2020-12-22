import { TestBed } from '@angular/core/testing';

import { LinksService } from './links.service';

describe('LinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinksService = TestBed.get(LinksService);
    expect(service).toBeTruthy();
  });
});
