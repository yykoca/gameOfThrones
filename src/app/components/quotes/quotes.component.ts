import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes$: Observable<any> = this.apiService.getData("random/5");

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

}
