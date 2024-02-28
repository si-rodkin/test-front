import { Component, OnInit } from '@angular/core';
import { RecordService } from '../service/record.service';
import { RecordTableDescription } from './records.table';
import { RecordsDialog } from './records.dialog';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
})
export class RecordsComponent implements OnInit {

  constructor(
    public service: RecordService,
    public table: RecordTableDescription,
    public dialog: RecordsDialog,
  ) { }

  ngOnInit(): void {
  }

}
