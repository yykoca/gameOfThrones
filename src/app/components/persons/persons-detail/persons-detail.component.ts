import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-persons-detail',
  templateUrl: './persons-detail.component.html',
  styleUrls: ['./persons-detail.component.scss']
})
export class PersonsDetailComponent {

  person$: Observable<any> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      {
        return this.apiService.getData('character/' + params.get('slug')!)}
      )
  );
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) {}
}
