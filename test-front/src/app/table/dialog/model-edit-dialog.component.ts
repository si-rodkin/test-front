import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogField } from './dialog-field';

@Component({
  template: `
    <h2 mat-dialog-title>Диалог изменения модели</h2>
    <mat-dialog-content>
      <mat-form-field *ngFor="let field of data.fields">
        <mat-label>{{ field.name }}</mat-label>
        <input matInput [value]="data.entity[field.key]" [disabled]="field.isDisabled" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Закрыть</button>
      <button mat-button mat-dialog-close color="primary">Сохранить</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class ModelEditDialog {
  constructor(
    public dialogRef: MatDialogRef<ModelEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data.fields)
    console.log(data.entity)

    for (let field of data.fields) {
        console.log("key = " + field.key + "; value = " + data.entity[field.key]);
    }
  }
}

export class DialogData {
    fields: DialogField[];
    entity: any;
}
