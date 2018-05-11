import {Injectable} from '@angular/core';
import {IPatient} from '../interfaces/interface';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {
    patients: Array<IPatient> = [
        {
            firstName: 'John',
            lastName: 'Smith',
            doctor: 'Martin',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos1',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Mary',
            lastName: 'Page',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos2',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Kate',
            lastName: 'Revs',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos3',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Viktoria',
            lastName: 'York',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos4',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Angela',
            lastName: 'Page',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos5',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Jack',
            lastName: 'Cage',
            doctor: 'Angela',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos6',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Max',
            lastName: 'Parker',
            doctor: 'Angela',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos7',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Den',
            lastName: 'Clunie',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos8',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Stan',
            lastName: 'Simpson',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos9',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Steve',
            lastName: 'Berry',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos10',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Irene',
            lastName: 'Cash',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos11',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Penelope',
            lastName: 'Plant',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos12',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'John',
            lastName: 'Charles',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos13',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Robert',
            lastName: 'Jagger',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos14',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Mick',
            lastName: 'Richards',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos15',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Kit',
            lastName: 'Osborn',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos16',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Ozzy',
            lastName: 'Kidman',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos17',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Nicole',
            lastName: 'Taron',
            doctor: 'Martin',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos18',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Cameron',
            lastName: 'Kerry',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos19',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        },
        {
            firstName: 'Jim',
            lastName: 'Diaz',
            doctor: 'Martin',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos20',
            phoneNumber: '111-111-111',
            city: 'Lviv'
        }
    ];

    constructor() {
    }

    getPatient(guid: string): IPatient {
        if (localStorage.getItem('patients') === null) {
            const patient = this.patients.filter((item) => item.guid === guid);
            return patient[0];
        } else {
            const newArray = JSON.parse(localStorage.getItem('patients'));
            const patient = newArray.filter((item) => item.guid === guid);
            return patient[0];
        }
    }

    createPatient(newPatient): void {
        const patient = {...newPatient,
            phoneNumber: '222',
            city: 'Kyiv'
        };
        this.patients.push(patient);

        // push new patients to LocalStorage
        if (localStorage.getItem('patients') === null) {
            localStorage.setItem('patients', JSON.stringify(this.patients));
        } else {
            const newArray = JSON.parse(localStorage.getItem('patients'));
            newArray.push(patient);
            localStorage.setItem('patients', JSON.stringify(newArray));
        }
    }
}

