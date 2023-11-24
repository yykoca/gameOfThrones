import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  houses$: Observable<any> = this.apiService.getData("houses");

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

}
