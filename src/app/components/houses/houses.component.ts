import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  searchQuery$ = new BehaviorSubject<string>('');
  houses$: Observable<House[]> = combineLatest([
    this.searchQuery$,
    this.apiService.getData("houses")
  ]).pipe(
    map(([searchQuery, houses]) => houses.filter((house: House) => {
      return house.name.toLowerCase().includes(searchQuery.toLowerCase())
    })));

  constructor(private apiService: ApiService) {}

  onSearchUpdated(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }
}
