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
  @Output() loadingStatusChange = new EventEmitter<unknown>();

  constructor(private commonHttpService: HttpService, appComponent: AppComponent) { }


  ngOnInit(): void {
    this.isLoadingCondition = this.isLoading;
  }

  getRepositoriesData() {
    this.loadingStatusChange.emit();
    console.log("Evento emitido 1");
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
    }
    this.loadingStatusChange.emit();
    console.log(this.resultsProcessedList);
  }

}
