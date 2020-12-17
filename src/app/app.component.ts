import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-repo-app-angular';
  isLoading: boolean = false;

  changeLoadingStatus() {
    this.isLoading = !this.isLoading;
    console.log(this.isLoading);
  }
}
