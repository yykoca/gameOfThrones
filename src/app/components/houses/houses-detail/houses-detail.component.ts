import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.scss']
})
export class HousesDetailComponent {

  house$: Observable<any> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.apiService.getData('house/' + params.get('slug')!)
      )
  );
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) {}
}
