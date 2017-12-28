import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor() { }

  search(terms: Observable<any>) {
    return terms
      .pipe(
      debounceTime(100),
      map(term => this.searchEntries(term))
      );
  }

  searchEntries(term: string) {
    return this.items.filter(c => c.plan.substring(0, term.length) == term);
  }

  items = [
    { plan: 'p1p' },
    { plan: 'p1pz' },
    { plan: 'p1pzv' },
    { plan: 'p1pb' },
    { plan: 'p5f' },
    { plan: 'p5fs' },
    { plan: 'a5f' },
    { plan: 'a5fs' }
  ]
}
