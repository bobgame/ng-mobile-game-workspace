import { TestBed } from '@angular/core/testing';

import { NgMobileGameService } from './ng-mobile-game.service';

describe('NgMobileGameService', () => {
  let service: NgMobileGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMobileGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
