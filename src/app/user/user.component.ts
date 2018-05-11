import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientsService} from '../services/patients.service';
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
    doctors: string[] = [
        'Martin',
        'Lucy',
        'Martin',
        'Angela',
        'Cortnee',
        'Nick'
    ];

    constructor(private route: ActivatedRoute,
                private patientsService: PatientsService) {}

    getPatient(): void {
        this.currentPatient = this.patientsService.getPatient(this.userId);
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.userId = params.user);
        this.getPatient();
    }

    ngOnDestroy() {
        localStorage.clear();
    }
}
