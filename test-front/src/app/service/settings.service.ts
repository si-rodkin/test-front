import { HttpClient } from "@angular/common/http";
import { Setting, SettingsAdapter } from "../model/setting";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { AbstractCrudService } from "./abstruct-crud.service";

@Injectable({providedIn: 'root'})
export class SettingsService extends AbstractCrudService<Setting> {
    url: string;

    constructor(private httpClient: HttpClient, private adapter: SettingsAdapter) {
        super();
        this.url = `${environment.url}/api/records`;
    }

    read(): Observable<Setting[]> {
        return this.httpClient.get(this.url)
            .pipe(
                map((records: any[]) => records.map(record => this.adapter.adapt(record)))
            );
    }

    readById(id: number): Observable<Setting> {
        return this.httpClient.get(`${this.url}/${id}`)
            .pipe(map(record => this.adapter.adapt(record)));
    }

    create(record: Setting): Observable<Setting> {
        return this.httpClient.post(this.url, record)
            .pipe(map(record => this.adapter.adapt(record)));
    }

    update(record: Setting): Observable<Setting> {
        return this.httpClient.put(this.url, record)
            .pipe(map(record => this.adapter.adapt(record)));
    }

    deleteById(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }
}