import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRecord} from '../../interfaces/interface';
import {Router, ActivatedRoute} from '@angular/router';
import {RecordsService} from '../../services/records.service';


@Component({
    selector: 'app-patients-list',
    templateUrl: './patients-list.component.html',
    styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent {
    @Input() records: IRecord [];
    @Output() deleteRecord = new EventEmitter();


    deleteRow(guid: string): void {
        this.deleteRecord.emit(guid);
    }

    navigateToUserDetails(user): void {
        this.router.navigate(['/user-details', user]);
    }

    constructor(private router: Router) {
    }

}
