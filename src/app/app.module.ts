import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesModule } from 'src/app/components/houses/houses.module';
import { PersonsComponent } from './components/persons/persons.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HousesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
