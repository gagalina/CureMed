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
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Mary',
            lastName: 'Page',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos2',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Kate',
            lastName: 'Revs',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos3',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Viktoria',
            lastName: 'York',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos4',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Angela',
            lastName: 'Page',
            doctor: 'Nick',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos5',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Jack',
            lastName: 'Cage',
            doctor: 'Angela',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos6',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Max',
            lastName: 'Parker',
            doctor: 'Angela',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos7',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Den',
            lastName: 'Clunie',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos8',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Stan',
            lastName: 'Simpson',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos9',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Steve',
            lastName: 'Berry',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos10',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Irene',
            lastName: 'Cash',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos11',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Penelope',
            lastName: 'Plant',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos12',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'John',
            lastName: 'Charles',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos13',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Robert',
            lastName: 'Jagger',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos14',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Mick',
            lastName: 'Richards',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos15',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Kit',
            lastName: 'Osborn',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos16',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Ozzy',
            lastName: 'Kidman',
            doctor: 'Angela',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos17',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Nicole',
            lastName: 'Taron',
            doctor: 'Martin',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos18',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Cameron',
            lastName: 'Kerry',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos19',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Jim',
            lastName: 'Diaz',
            doctor: 'Martin',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos20',
            phoneNumber: '111-111-111',
            city: 'Lviv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
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
            city: 'Kyiv',
            street: 'Naukova',
            dateOfBirth: '11-02-1996'
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

    editPatient(editedPatient): void {
        this.patients.map((el, index) => {
            if (el.guid === editedPatient.guid) {
                this.patients.splice(index, 1, editedPatient);
            }
        });
        console.log(this.patients);
        console.log(editedPatient);
    }
}

