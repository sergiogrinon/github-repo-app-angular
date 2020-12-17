import { Component, Input, OnInit } from '@angular/core';
import { GithubResult } from '../configs/github-result';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.css']
})
export class ResultsGridComponent implements OnInit {

  @Input() resultList: [];
  @Input() isLoading: boolean;
  @Input() isLoaded: boolean;

  constructor() {

   }

  ngOnInit(): void {
    this.resultList = [];
  }

}
