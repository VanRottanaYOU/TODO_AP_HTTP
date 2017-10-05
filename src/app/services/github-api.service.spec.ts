import { TestBed, inject } from '@angular/core/testing';

import GithubApiService from "../services/github-api.service";

describe('GithubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiService]
    });
  });

  it('should be created', inject([GithubApiService], (service: GithubApiService) => {
    expect(service).toBeTruthy();
  }));
});
