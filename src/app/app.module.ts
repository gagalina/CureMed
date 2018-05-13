import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonthIterablePipe} from './pipes/month-iterable.pipe';
import {PatientsListComponent} from './day-details/patinets-list/patients-list.component';
import {RecordsService} from './services/records.service';
import {PatientsService} from './services/patients.service';
import {HealthService} from './services/health.service';
import {ReactiveFormsModule} from '@angular/forms';
import JsonToCsv from './utils/json_to_csv';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {UserComponent} from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        PatientsListComponent,
        routingComponents,
        MonthIterablePipe,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AmazingTimePickerModule
    ],
    providers: [
        JsonToCsv,
        RecordsService,
        PatientsService,
        HealthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
