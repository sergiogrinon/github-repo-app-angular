import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GithubResult } from '../configs/github-result';
import { HttpService } from '../core/services/http/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  repoName: string;
  resultsProcessedList = new Array();
  isLoadingCondition: boolean;

  @Input() isLoading: boolean;
  @Input() isLoaded: boolean;
  @Input() resultList: Array<any>;
  @Output() loadingStatusChange = new EventEmitter<unknown>();
  @Output() loadedStatusChange = new EventEmitter<unknown>();
  @Output() fillParentList = new EventEmitter<unknown>();

  constructor(private commonHttpService: HttpService, appComponent: AppComponent) { }


  ngOnInit(): void {
    this.isLoadingCondition = this.isLoading;
  }

  getRepositoriesData() {
    if(this.isLoaded) {
      this.loadedStatusChange.emit();
    }
    this.resultList = new Array<GithubResult>();
    this.loadingStatusChange.emit();
    this.commonHttpService.callGetRepositories(this.repoName).then((response: any) => {
      this.transformRepositoriesData(response);
    });
  }

  transformRepositoriesData(rawData: any) {
    for (let tempItem of rawData.items) {
      let gitHubProcessedResult: GithubResult = {
        avatarURI: tempItem.owner.avatar_url,
        repoURI: tempItem.html_url,
        repoName: tempItem.full_name,
        forks: tempItem.forks_count,
        views: tempItem.watchers_count,
        bugs: tempItem.open_issues
      }
      this.resultsProcessedList.push(gitHubProcessedResult);
      this.resultList.push(gitHubProcessedResult);
    }
    this.loadingStatusChange.emit();
    this.loadedStatusChange.emit();
    this.fillParentList.emit(this.resultsProcessedList);
  }

}
