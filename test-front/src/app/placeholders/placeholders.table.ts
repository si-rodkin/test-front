import { Injectable } from "@angular/core";
import { TableColumn } from "../table/description/table-column";
import { TableDescription } from "../table/description/table-description";

@Injectable({providedIn: 'root'})
export class PlaceholdersTableDescription extends TableDescription {
    constructor() {
        super([
            new TableColumn("Идентификатор", "id"),
            new TableColumn("Имя", "name"),
            new TableColumn("Значение", "value")
        ]);
    }
}