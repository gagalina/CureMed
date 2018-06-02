import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {IRecord} from '../interfaces/interface';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


// Date is not the best index, but in real project this data would be stored on the backend under a uuid
// each data change would be done through the backend
// each search would be done through backend


@Injectable()
export class RecordsService {
    private sub$: BehaviorSubject<Map<string, IRecord[]>> = new BehaviorSubject(undefined);

    constructor() {
        const records: Map<string, IRecord[]> = new Map<string, IRecord[]>();

        records.set('02-06-2018', [
                {
                    firstName: 'Ангеліна',
                    lastName: 'Іванова',
                    doctor: 'Марія',
                    date: '02-06-2018',
                    time: '10:10',
                    guid: 'cos1'
                },
                {
                    firstName: 'Іван',
                    lastName: 'Петренко',
                    doctor: 'Наталія',
                    date: '02-06-2018',
                    time: '14:10',
                    guid: 'cos2'
                }
            ]
        );

        records.set('04-06-2018', [
                {
                    firstName: 'Петро',
                    lastName: 'Петренко',
                    doctor: 'Антон',
                    date: '02-06-2018',
                    time: '11:10',
                    guid: 'cos3'
                },
                {
                    firstName: 'Вікторія',
                    lastName: 'Петрова',
                    doctor: 'Микола',
                    date: '02-06-2018',
                    time: '12:10',
                    guid: 'cos4'
                }
            ]
        );
        records.set('09-06-2018', [
                {
                    firstName: 'Ангеліна',
                    lastName: 'Іванова',
                    doctor: 'Антон',
                    date: '02-06-2018',
                    time: '15:10',
                    guid: 'cos5'
                },
                {
                    firstName: 'Дмитро',
                    lastName: 'Іванов',
                    doctor: 'Андрій',
                    date: '02-06-2018',
                    time: '14:10',
                    guid: 'cos6'
                },
                {
                    firstName: 'Максим',
                    lastName: 'Максименко',
                    doctor: 'Марія',
                    date: '02-06-2018',
                    time: '13:10',
                    guid: 'cos7'
                },
                {
                    firstName: 'Іван',
                    lastName: 'Петров',
                    doctor: 'Наталія',
                    date: '02-05-2018',
                    time: '12:10',
                    guid: 'cos8'
                }
            ]
        );
        records.set('11-05-2018', [
                {
                    firstName: 'Петро',
                    lastName: 'Іванов',
                    doctor: 'Антон',
                    date: '02-05-2018',
                    time: '10:10',
                    guid: 'cos9'
                },
                {
                    firstName: 'Степан',
                    lastName: 'Степанов',
                    doctor: 'Антон',
                    date: '02-05-2018',
                    time: '9:30',
                    guid: 'cos10'
                }
            ]
        );
        records.set('16-05-2018', [
                {
                    firstName: 'Ірина',
                    lastName: 'Іванова',
                    doctor: 'Антон',
                    date: '02-05-2018',
                    time: '9:10',
                    guid: 'cos11'
                },
                {
                    firstName: 'Петро',
                    lastName: 'Петренко',
                    doctor: 'Андрій',
                    date: '02-05-2018',
                    time: '10:10',
                    guid: 'cos12'
                }
            ]
        );
        records.set('19-05-2018', [
                {
                    firstName: 'Олег',
                    lastName: 'Павленко',
                    doctor: 'Марія',
                    date: '02-05-2018',
                    time: '18:00',
                    guid: 'cos13'
                },
                {
                    firstName: 'Павло',
                    lastName: 'Павленко',
                    doctor: 'Микола',
                    date: '02-05-2018',
                    time: '17:10',
                    guid: 'cos14'
                }
            ]
        );

        records.set('20-05-2018', [
                {
                    firstName: 'Микола',
                    lastName: 'Іванов',
                    doctor: 'Наталія',
                    date: '02-05-2018',
                    time: '16:10',
                    guid: 'cos15'
                },
                {
                    firstName: 'Катерина',
                    lastName: 'Павленко',
                    doctor: 'Наталія',
                    date: '02-05-2018',
                    time: '15:10',
                    guid: 'cos16'
                }
            ]
        );

        records.set('21-05-2018', [
                {
                    firstName: 'Іванна',
                    lastName: 'Павленко',
                    doctor: 'Антон',
                    date: '02-05-2018',
                    time: '14:10',
                    guid: 'cos17'
                },
                {
                    firstName: 'Микола',
                    lastName: 'Іванов',
                    doctor: 'Антон',
                    date: '02-04-2018',
                    time: '13:10',
                    guid: 'cos18'
                }
            ]
        );

        records.set('27-05-2018', [
                {
                    firstName: 'Антон',
                    lastName: 'Антонов',
                    doctor: 'Микола',
                    date: '02-04-2018',
                    time: '12:10',
                    guid: 'cos19'
                },
                {
                    firstName: 'Павло',
                    lastName: 'Антонов',
                    doctor: 'Микола',
                    date: '02-05-2018',
                    time: '12:20',
                    guid: 'cos20'
                }
            ]
        );

        this.sub$.next(records);
    }
    private _guid() {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }

    private _getDayRecords(date: string): IRecord[] {
        return this.sub$.getValue().get(date);
    }


    deleteRecord(date: string, guid: string): void {
        const data = this._getDayRecords(date);
        const updatedData = data.filter(el => el.guid !== guid);
        const mapdata = this.sub$.getValue();
        mapdata.set(date, updatedData);
        this.sub$.next(mapdata);
    }


    setRecord(record: IRecord): void {
        const data = this._getDayRecords(record.date) || [];
        record.guid = this._guid();
        data.push(record);
        const mapdata = this.sub$.getValue();
        mapdata.set(record.date, data);
        localStorage.setItem('record', JSON.stringify(record));
        const newArray = JSON.parse(localStorage.getItem('record'));
        console.log(newArray, 'from local storage');
        this.sub$.next(mapdata);

    }

    getRecordsForMonth(startDate: string, endDate: string): Observable<any> {
        const rangeStart = moment(startDate, 'DD-MM-YYYY',);
        const rangeEnd = moment(endDate, 'DD-MM-YYYY',);
        const recordsForMonth: Map<string, IRecord[]> = new Map<string, IRecord[]>();

        // the aim is to return a map of records for month
        // did not want to clone the 'records' map since it will be speed consuming

        this.sub$.getValue().forEach((record, key) => {
            const elDate = moment(key, 'DD-MM-YYYY',);

            if (elDate >= rangeStart && elDate <= rangeEnd) {
                recordsForMonth.set(key, record);
            }

        });

        return of(recordsForMonth);
    }

    getRecords(date): Observable<IRecord []> {
        return this.sub$.asObservable()
            .map((res) => res.get(date));
    }

}
