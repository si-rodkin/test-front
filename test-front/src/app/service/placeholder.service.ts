import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Placeholder, PlaceholerAdapter } from "../model/placeholder";
import { map } from 'rxjs/operators';
import { AbstractCrudService } from "./abstruct-crud.service";

@Injectable({providedIn: 'root'})
export class PlaceholderService extends AbstractCrudService<Placeholder> {

    url: string;

    constructor(private httpClient: HttpClient, private adapter: PlaceholerAdapter) {
        super();
        this.url = `${environment.url}/api/placeholders`;
    }

    read(): Observable<Placeholder[]> {
        return this.httpClient.get(this.url)
        .pipe(
            map(
                (placeholders: any[]) => placeholders.map(
                    placeholder => this.adapter.adapt(placeholder)
                )
            )
        );
    }

    readById(id: number): Observable<Placeholder> {
        return this.httpClient.get(`${this.url}/${id}`)
            .pipe(map(placeholder => this.adapter.adapt(placeholder)));
    }

    readByName(name: string): Observable<Placeholder> {
        return this.httpClient.get(`${this.url}/by-name/${name}`)
            .pipe(map(placeholder => this.adapter.adapt(placeholder)));
    }

    create(placeholder: Placeholder): Observable<Placeholder>  {
        return this.httpClient.post(this.url, placeholder)
            .pipe(map(placeholder => this.adapter.adapt(placeholder)));
    }

    update(placeholder: Placeholder): Observable<Placeholder> {
        return this.httpClient.put(this.url, placeholder)
            .pipe(map(placeholder => this.adapter.adapt(placeholder)));
    }

    deleteById(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }
}