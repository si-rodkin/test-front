import { Component, Input, OnInit } from '@angular/core';
import { TableDescription } from './description/table-description';
import { DialogDescription } from './dialog/dialog-description';
import { AbstractCrudService } from '../service/abstruct-crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelEditDialog } from './dialog/model-edit-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() tableDescription: TableDescription;
  @Input() dialogDescription: DialogDescription;
  @Input() service: AbstractCrudService<any>;

  data: any[];
  dataSource = new MatTableDataSource();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.read().subscribe({
      next: (data) => {
        this.data = data;
        this.dataSource.data = data;
      },
      error: (err) => console.log(err),
    });
  }

  getColumns(): string[] {
    return this.tableDescription.columns.map((c) => c.key);
  }

  openDialog(row) {
    if (this.dialogDescription === undefined) {
      console.error('Модель диалога не определена');
      return;
    }

    console.log(row)
    this.dialog.open(ModelEditDialog, {
      data: { fields: this.dialogDescription.fields, entity: row },
    });
  }
}
