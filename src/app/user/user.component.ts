import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientsService} from '../services/patients.service';
import {HealthService} from '../services/health.service';
import {IPatient} from '../interfaces/interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

    userId: string;
    currentPatient: IPatient;

    userForm: FormGroup = new FormGroup(
        {
            firstName: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            lastName: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            doctor: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            city: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            street: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            phoneNumber: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            dateOfBirth: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            diagnosis: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            }),
            analysis: new FormControl({
                validators: Validators.required,
                updateOn: 'change'
            })
        }
    );
    doctors: string[] = [
        'Марія',
        'Андрій',
        'Галина',
        'Антон',
        'Наталія',
        'Микола'
    ];

    history: {
        guid: string,
        diagnosis: string,
        analysis: string
    };

    constructor(private route: ActivatedRoute,
                private patientsService: PatientsService,
                private healthService: HealthService) {}

    getPatient(): void {
        this.currentPatient = this.patientsService.getPatient(this.userId);
    }

    retrieveHistory(): void {
        this.history = this.healthService.retrieveHistory(this.userId);
    }

    editPatient(): void {
        if (this.userForm.valid) {
            const user: IPatient = {
                firstName: this.userForm.value.firstName,
                lastName: this.userForm.value.lastName,
                doctor: this.userForm.value.doctor,
                date: this.currentPatient.date,
                time: this.currentPatient.time,
                guid: this.currentPatient.guid,
                phoneNumber: this.userForm.value.phoneNumber,
                city: this.userForm.value.city,
                street: this.userForm.value.street,
                dateOfBirth: this.userForm.value.dateOfBirth
            };
            this.patientsService.editPatient(user);
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.userId = params.user);
        this.getPatient();
        this.retrieveHistory();
    }

    ngOnDestroy() {
        localStorage.clear();
    }
}
