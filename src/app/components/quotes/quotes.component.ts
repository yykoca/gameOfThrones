import { Component } from '@angular/core';
import { Observable, Subject, startWith, switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  private readonly quotesSubject$ = new Subject<number>();
  quotes$: Observable<any> = this.quotesSubject$.pipe(
    startWith(5),
    switchMap((quoteCount) => this.apiService.getData(`random/${quoteCount}`)
   ));

  constructor(private apiService: ApiService) {}

  ngOnDestroy(){
    this.quotesSubject$.complete();
  }

  generateRandomQuotes(){
    this.quotesSubject$.next(5);
  }
}
