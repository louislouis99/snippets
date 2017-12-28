import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  results: any = null;
  searchTerm = new Subject<any>();
  currentValue: string = '';
  searchSub: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchSub =
      this.searchService.search(this.searchTerm)
        .subscribe(results => {
          this.results = results;
        });
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

  doSearch() {
    if (this.currentValue !== '') {
      this.searchTerm.next(this.currentValue);
    }
    else {
      this.results = null;
    }
  }  
}
