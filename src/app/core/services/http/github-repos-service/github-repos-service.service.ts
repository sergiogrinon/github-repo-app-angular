import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubReposServiceService {
  //All variable declarations
  requestURI: string;
  GITHUB_URI = 'https://api.github.com/search/repositories?per_page=50&q=';
  
  //All imports and object import creation goes in the constructor
  constructor(private http: HttpClient) { }
  
  //Functions don't need to be declared as functions, just name() {}
  getRepositories(repoName) {
    this.requestURI = this.GITHUB_URI + repoName;
    return this.http.get(this.requestURI);
  }
}
