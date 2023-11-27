import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  houses$: Observable<any> = this.apiService.getData("houses");

  constructor(private apiService: ApiService) {}

}
