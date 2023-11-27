import { NgModule } from '@angular/core';
import { HousesDetailComponent } from './houses-detail/houses-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { HousesComponent } from './houses.component';

@NgModule({
  declarations: [
    HousesComponent,
    HousesDetailComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [HousesDetailComponent]
})
export class HousesModule {}
