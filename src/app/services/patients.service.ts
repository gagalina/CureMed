import {Injectable} from '@angular/core';
import {IPatient} from '../interfaces/interface';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {
    patients: Array<IPatient> = [
        {
            firstName: 'Ангеліна',
            lastName: 'Іванова',
            doctor: 'Марія',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos1',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Іван',
            lastName: 'Петренко',
            doctor: 'Наталія',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos2',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Петро',
            lastName: 'Петренко',
            doctor: 'Антон',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos3',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Вікторія',
            lastName: 'Петрова',
            doctor: 'Микола',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos4',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Ангеліна',
            lastName: 'Іванова',
            doctor: 'Антон',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos5',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Дмитро',
            lastName: 'Іванов',
            doctor: 'Андрій',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos6',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Максим',
            lastName: 'Максименко',
            doctor: 'Марія',
            time: '12:10',
            date: '02-06-2018',
            guid: 'cos7',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Іван',
            lastName: 'Петров',
            doctor: 'Наталія',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos8',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Петро',
            lastName: 'Іванов',
            doctor: 'Антон',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos9',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Степан',
            lastName: 'Степанов',
            doctor: 'Антон',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos10',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Ірина',
            lastName: 'Іванова',
            doctor: 'Антон',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos11',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Петро',
            lastName: 'Петренко',
            doctor: 'Андрій',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos12',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Олег',
            lastName: 'Павленко',
            doctor: 'Марія',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos13',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Павло',
            lastName: 'Павленко',
            doctor: 'Микола',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos14',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Микола',
            lastName: 'Іванов',
            doctor: 'Наталія',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos15',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Катерина',
            lastName: 'Павленко',
            doctor: 'Наталія',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos16',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Іванна',
            lastName: 'Павленко',
            doctor: 'Антон',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos17',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Микола',
            lastName: 'Іванов',
            doctor: 'Антон',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos18',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Антон',
            lastName: 'Антонов',
            doctor: 'Микола',
            time: '12:10',
            date: '02-04-2018',
            guid: 'cos19',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
            dateOfBirth: '11-02-1996'
        },
        {
            firstName: 'Павло',
            lastName: 'Антонов',
            doctor: 'Микола',
            time: '12:10',
            date: '02-05-2018',
            guid: 'cos20',
            phoneNumber: '111-111-111',
            city: 'Львів',
            street: 'Наукова',
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
            street: 'Наукова',
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

