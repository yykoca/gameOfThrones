import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, combineLatest, map, of, startWith, switchMap } from 'rxjs';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-persons-detail',
  templateUrl: './persons-detail.component.html',
  styleUrls: ['./persons-detail.component.scss']
})
export class PersonsDetailComponent implements OnDestroy {
  private readonly quotesSubject$ = new Subject<number | null>();

  personDetail$: Observable<Person[]> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.apiService.getData('character/' + params.get('slug')!))
  );

  quotes$: Observable<Quote[]> = this.quotesSubject$.pipe(
    startWith(null),
    switchMap((quoteCount) => !quoteCount ? of([]) : this.apiService.getData(`random/${quoteCount}`)
  ));

  person$: Observable<Person> = combineLatest([this.personDetail$, this.quotes$]).pipe(
    map(([personDetail, quotes]) => {
      const person = personDetail[0];

      if(quotes.length > 0) {
        person.quotes = quotes.map((quote: Quote) => (quote.sentence + " | " + quote.character.name))
      }

      return person
    }));

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) {}

  ngOnDestroy(){
    this.quotesSubject$.complete();
  }

  generateRandomQuotes(){
    this.quotesSubject$.next(5);
  }
}
