import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { PersonsComponent } from './components/persons/persons.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { HousesDetailComponent } from './components/houses/houses-detail/houses-detail.component';
import { PersonsDetailComponent } from './components/persons/persons-detail/persons-detail.component';

const routes: Routes = [
  {
    path: 'persons',
    children: [{
      path: '',
      component: PersonsComponent,
    },
    {
      path: ':slug',
      component: PersonsDetailComponent,
    }
  ]
  },
  {
    path: 'houses',
    children: [
      {
        path: '',
        component: HousesComponent
      },
      {
        path: ':slug',
        component: HousesDetailComponent
      },
    ]
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
