import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  searchQuery$ = new BehaviorSubject<string>('');
  persons$: Observable<Person[]> = combineLatest([
    this.searchQuery$,
    this.apiService.getData("characters")
  ]).pipe(
    map(([searchQuery, persons]) => persons.filter((person: Person) => {
      return person.name.toLowerCase().includes(searchQuery.toLowerCase())
    })));

  constructor(private apiService: ApiService) {}

  onSearchUpdated(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }
}
