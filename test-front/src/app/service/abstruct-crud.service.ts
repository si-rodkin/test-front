import { Observable } from "rxjs";
import { DataModel } from "../model/data-model";

export abstract class AbstractCrudService<T extends DataModel> {
   abstract read(): Observable<T[]>
   abstract create(item: T): Observable<T>
   abstract update(item: T): Observable<T>
   abstract deleteById(id: number): Observable<void>
}