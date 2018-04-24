import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRecord} from '../../interfaces/interface';

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

  constructor() {
  }

}
