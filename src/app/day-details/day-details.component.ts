import {Component, OnInit} from '@angular/core';
import {RecordsService} from '../services/records.service';
import {IRecord} from '../interfaces/interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-day-details',
    templateUrl: './day-details.component.html',
    styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent {
    recordForm: FormGroup = new FormGroup(
        {
            firstName: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            lastName: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            doctor: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            time: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'change'
            })
        }
    );
    records: IRecord [];
    date: string;
    doctors: string[] = [
        'Martin',
        'Lucy',
        'Martin',
        'Angela',
        'Cortnee',
        'Nick'
    ];

    constructor(private route: ActivatedRoute, private recordsService: RecordsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.date = params.date);
        this.getRecords();
    }

    addRecord(): void {
        if (this.recordForm.valid) {

            const record: IRecord = {
                firstName: this.recordForm.value.firstName,
                lastName: this.recordForm.value.lastName,
                doctor: this.recordForm.value.doctor,
                date: this.date,
                time: this.recordForm.value.time,
                guid: this.recordForm.value.guid

        };
            this.recordsService.setRecord(record);
            this.recordForm.reset();
        }

    }

    deleteRecord(guid: string): void {

        this.recordsService.deleteRecord(this.date, guid);
    }

    getRecords(): void {
        this.recordsService.getRecords(this.date).subscribe(records => {
            this.records = records;
        });
    }
}
