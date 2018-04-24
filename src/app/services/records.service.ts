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

    records.set('02-04-2018', [
        {firstName: 'John',
            lastName: 'Smith',
            doctor: 'Martin',
            date: '02-04-2018',
            time: '12:10',
            income: 20, outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '23e4324cs'},
        {firstName: 'Mary',
            lastName: 'Page',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '2309324cs'}
      ]
    );

    records.set('04-04-2018', [
        {firstName: 'Kate',
            lastName: 'Revs',
            doctor: 'Nick',
            time: '12:10',
            date: '02-04-2018',
            income: 9,
            outcome: 1,
            pureIncome: 8,
            taxes: 2,
            guid: '4234332'},
        {firstName: 'Viktoria',
            lastName: 'York',
            doctor: 'Nick',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '7987423'}
      ]
    );
    records.set('09-04-2018', [
        {firstName: 'Angela',
            lastName: 'Page',
            doctor: 'Nick',
            time: '12:10',
            date: '02-04-2018',
            income: 40,
            outcome: 14,
            pureIncome: 36,
            taxes: 2,
            guid: '23e4324cs'},
        {firstName: 'Jack',
            lastName: 'Cage',
            doctor: 'Angela',
            time: '12:10',
            date: '02-04-2018',
            income: 8,
            outcome: 1,
            pureIncome: 7,
            taxes: 20,
            guid: '23024cs'},
        {firstName: 'Max',
            lastName: 'Parker',
            doctor: 'Angela',
            time: '12:10',
            date: '02-04-2018',
            income: 1,
            outcome: 0,
            pureIncome: 1,
            taxes: 20,
            guid: '230932431s'},
        {firstName: 'Den',
            lastName: 'Clunie',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-04-2018',
            income: 1,
            outcome: 0,
            pureIncome: 2,
            taxes: 20,
            guid: '634342'}
      ]
    );
    records.set('11-04-2018', [
        {firstName: 'Stan',
            lastName: 'Simpson',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-04-2018',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '879879877'},
        {firstName: 'Steve',
            lastName: 'Berry',
            doctor: 'Angela',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '4324'}
      ]
    );
    records.set('16-04-2018', [
        {firstName: 'Irene',
            lastName: 'Cash',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-04-2018',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '434635342'},
        {firstName: 'Penelope',
            lastName: 'Plant',
            doctor: 'Cortnee',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: 'r243t34634'}
      ]
    );
    records.set('19-04-2018', [
        {firstName: 'John',
            lastName: 'Charles',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '6t34r236453'},
        {firstName: 'Robert',
            lastName: 'Jagger',
            date: '02-04-2018',
            doctor: 'Angela',
            time: '12:10',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: 't346452523'}
      ]
    );

    records.set('20-04-2018', [
        {firstName: 'Mick',
            lastName: 'Richards',
            doctor: 'Angela',
            time: '12:10',
            date: '02-04-2018',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '53465324'},
        {firstName: 'Kit',
            lastName: 'Osborn',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '123133213'}
      ]
    );

    records.set('21-04-2018', [
        {firstName: 'Ozzy',
            lastName: 'Kidman',
            date: '02-04-2018',
            doctor: 'Angela',
            time: '12:10',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '890756098'},
        {firstName: 'Nicole',
            lastName: 'Taron',
            doctor: 'Martin',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '43234389890'}
      ]
    );

    records.set('27-04-2018', [
        {firstName: 'Cameron',
            lastName: 'Kerry',
            doctor: 'Lucy',
            time: '12:10',
            date: '02-04-2018',
            income: 20,
            outcome: 10,
            pureIncome: 10,
            taxes: 2,
            guid: '43254398'},
        {firstName: 'Jim',
            lastName: 'Diaz',
            doctor: 'Martin',
            time: '12:10',
            date: '02-04-2018',
            income: 100,
            outcome: 14,
            pureIncome: 12,
            taxes: 20,
            guid: '98482432098'}
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
    this.sub$.next(mapdata);
  }

  getRecordsForMonth(startDate: string, endDate: string): Observable<any> {
    const rangeStart = moment(startDate, 'DD-MM-YYYY', );
    const rangeEnd = moment(endDate, 'DD-MM-YYYY', );
    const recordsForMonth: Map<string, IRecord[]> = new Map<string, IRecord[]>();

    // the aim is to return a map of records for month
    // did not want to clone the 'records' map since it will be speed consuming

    this.sub$.getValue().forEach((record, key) => {
      const elDate = moment(key, 'DD-MM-YYYY', );

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
