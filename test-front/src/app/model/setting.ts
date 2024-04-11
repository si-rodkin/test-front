import { Injectable } from "@angular/core";
import { DataModel } from "./data-model";

export class Setting implements DataModel {
    id: number | undefined;
    value: string;

    compare(other: Setting): boolean {
        return !!other && other.id == this.id;
    }
}

@Injectable({providedIn: 'root'})
export class SettingsAdapter {
    adapt(item: any): Setting {
        const r = new Setting();

        r.id = item.id;
        r.value = item.value;

        return r;
    }
}
