import { TestBed } from '@angular/core/testing';

import { OauthGoogleService } from './oauth-google.service';

describe('OauthGoogleService', () => {
  let service: OauthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
