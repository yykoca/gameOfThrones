import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons$: Observable<any> = this.apiService.getData("characters");

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

}
