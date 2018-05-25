import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
import {Router} from '@angular/router';
import {RecordsService} from '../services/records.service';
import {IRecord} from '../interfaces/interface';
import {JsonToCsv} from '../utils/json_to_csv';

@Component ({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedMonth: Moment = moment();
  monthRecords: Map<string, IRecord[]>;
  constructor(private router: Router, private recordsService: RecordsService, private jsonToCsv: JsonToCsv) {
  }


  navigateToDayDetails(day): void {
    const dateForNavigation = this.selectedMonth.clone();
    dateForNavigation.date(day);
    this.router.navigate(['/day-details', dateForNavigation.format('DD-MM-YYYY')]);
  }

  getDaysInMonth(): number {
    return this.selectedMonth.daysInMonth();
  }

  getMonth(adjustmentCriteria: number): void {
    const month: number = this.selectedMonth.month();
    const year: number = this.selectedMonth.year();
    const dateToUpdate = moment();

    dateToUpdate.year(year).month(month + adjustmentCriteria);

    // had to do this because angular pipe will not update
    this.selectedMonth = dateToUpdate;

    this.getRecordsForMonth();
  }

  getRecordsForMonth(): void {
    const startDate = this.selectedMonth.startOf('month').format('DD-MM-YYYY');
    const endDate = this.selectedMonth.endOf('month').format('DD-MM-YYYY');
    this.recordsService.getRecordsForMonth(startDate, endDate).subscribe(monthRecords => {
      this.monthRecords = monthRecords;
    });
  }

  checkDay(day: number) {
    const copySelectedMonth = this.selectedMonth.clone().date(day);
    const dateString = copySelectedMonth.format('DD-MM-YYYY');
    const recordsFound = this.monthRecords.get(dateString) || [];

    return recordsFound.length;
  }

  getDayStats(day: number) {
    const copySelectedMonth = this.selectedMonth.clone().date(day);
    const dateString = copySelectedMonth.format('DD-MM-YYYY');
    const recordsForDay = this.monthRecords.get(dateString) || [];
    return recordsForDay.length || null;
  }

  toCsv() {
    const monthRecords = [].concat.apply([], Array.from(this.monthRecords.values()));
    console.log(monthRecords);
    this.jsonToCsv.parse(monthRecords, this.selectedMonth.format('MMMM-YYYY'));
  }

  ngOnInit() {
    this.getRecordsForMonth();
  }

}
