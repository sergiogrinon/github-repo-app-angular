import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/services/http/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  repoName: string;

  constructor(private commonHttpService: HttpService) { }

  ngOnInit(): void {
  }

  getRepositoriesData() {
    this.commonHttpService.callGetRepositories(this.repoName);
  }

}
