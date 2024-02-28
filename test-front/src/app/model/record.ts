import { Injectable } from "@angular/core";
import { DataModel } from "./data-model";

export class Record implements DataModel {
    id: number | undefined;
    value: string;

    compare(other: Record): boolean {
        return !!other && other.id == this.id;
    }
}

@Injectable({providedIn: 'root'})
export class RecordAdapter {
    adapt(item: any): Record {
        const r = new Record();

        r.id = item.id;
        r.value = item.value;

        return r;
    }
}
