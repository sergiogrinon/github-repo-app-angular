import { Component } from '@angular/core';
import { GithubResult } from './configs/github-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-repo-app-angular';
  isLoading: boolean = false;
  processedResultList: Array<GithubResult>;
  isLoaded: boolean = false;

  changeLoadingStatus() {
    this.isLoading = !this.isLoading;
  }

  changeLoadedStatus() {
    this.isLoaded = !this.isLoaded;
  }

  fillList(pasedList) {
    this.processedResultList = pasedList;
  }
}
