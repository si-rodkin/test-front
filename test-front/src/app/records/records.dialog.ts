import { Injectable } from '@angular/core';
import { DialogDescription } from '../table/dialog/dialog-description';
import { DialogField } from '../table/dialog/dialog-field';

@Injectable({ providedIn: 'root' })
export class RecordsDialog extends DialogDescription {
  constructor() {
    super([
      new DialogField('Идентификатор', 'id').setDisabled(true),
      new DialogField('Значение', 'value'),
      new DialogField('Значение с заменами', 'valueWithReplaces').setDisabled(
        true
      ),
    ]);
  }
}
