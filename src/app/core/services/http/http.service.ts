import { Injectable } from '@angular/core';
import { GithubReposServiceService } from './github-repos-service/github-repos-service.service';

@Injectable({
  providedIn: 'root'
})

/**
 * This is the web service. Has all secondary services or microservices imported to consume them.
 * Could be more separated in a single folder for each component of each view.
 */

export class HttpService {

  constructor(private githubReposServiceService: GithubReposServiceService) { }

  callGetRepositories(repoName: string) {
    let promise;
    promise = new Promise((resolve, reject) => {
      this.githubReposServiceService.getRepositories(repoName)
      .then(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
    return promise;
  }
}
