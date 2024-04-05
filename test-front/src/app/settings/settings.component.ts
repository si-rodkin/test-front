import { Component, OnInit } from '@angular/core';
import { RecordService as SettingsService } from '../service/record.service';
import { RecordTableDescription as SettingsTableDescription } from './settings.table';
import { RecordsDialog as SettingsDialog } from './settings.dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  constructor(
    public service: SettingsService,
    public table: SettingsTableDescription,
    public dialog: SettingsDialog,
  ) { }

  ngOnInit(): void {
  }

}
