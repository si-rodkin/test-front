import { Component, OnInit } from '@angular/core';
import { PlaceholdersTableDescription } from './placeholders.table';
import { PlaceholderService } from '../service/placeholder.service';
import { PlaceholdersDialogDescription } from './placeholders.dialog';

@Component({
  selector: 'app-placeholders',
  templateUrl: './placeholders.component.html',
})
export class PlaceholdersComponent implements OnInit {
  constructor(
    public table: PlaceholdersTableDescription,
    public service: PlaceholderService,
    public dialog: PlaceholdersDialogDescription,
  ) {}

  ngOnInit(): void {}
}
