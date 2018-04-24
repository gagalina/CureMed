import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonthIterablePipe} from './pipes/month-iterable.pipe';
import {PatientsListComponent} from './day-details/patinets-list/patients-list.component';
import {RecordsService} from './services/records.service';
import {ReactiveFormsModule} from '@angular/forms';
import JsonToCsv from './utils/json_to_csv';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    routingComponents,
    MonthIterablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    JsonToCsv,
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
