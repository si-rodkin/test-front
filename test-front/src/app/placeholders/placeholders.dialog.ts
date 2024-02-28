import { Injectable } from "@angular/core";
import { DialogDescription } from "../table/dialog/dialog-description";
import { DialogField } from "../table/dialog/dialog-field";

@Injectable({providedIn: 'root'})
export class PlaceholdersDialogDescription extends DialogDescription {
    constructor() {
        super([
            new DialogField("Идентификатор", "id").setDisabled(true),
            new DialogField("Имя", "name"),
            new DialogField("Значение", "value")
        ]);
    }
}