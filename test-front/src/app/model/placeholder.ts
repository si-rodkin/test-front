import { Injectable } from "@angular/core";
import { DataModel } from "./data-model";

export class Placeholder implements DataModel {
    id: number | undefined;
    name: string;
    value: string;

    compare(other: Placeholder): boolean {
        return !!other && other.id == this.id;
    }
}

@Injectable({providedIn: 'root'})
export class PlaceholerAdapter {
    adapt(item: any): Placeholder {
        const p = new Placeholder();
        p.id = item.id;
        p.name = item.name;
        p.value = item.value;

        return p;
    }
}
