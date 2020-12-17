import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.css']
})
export class ResultsGridComponent implements OnInit {
  resultList = this.searchBarComponent.resultsProcessedList;

  constructor(private searchBarComponent: SearchBarComponent) {
    
   }

  ngOnInit(): void {
  }

}
