import { TestBed } from '@angular/core/testing';

import { GithubReposServiceService } from './github-repos-service.service';

describe('GithubReposServiceService', () => {
  let service: GithubReposServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubReposServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
