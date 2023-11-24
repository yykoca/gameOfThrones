import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { PersonsComponent } from './components/persons/persons.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {
    path: 'persons',
    component: PersonsComponent,
  },
  {
    path: 'houses',
    component: HousesComponent,
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
