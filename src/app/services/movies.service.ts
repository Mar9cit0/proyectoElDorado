import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { EMPTY, Observable } from 'rxjs';
import movies from '../models/movies.model';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

    // RxJS
    getAll(): Observable<movies> { // Esse esquema de passar uma classe dentro de < > se chama generics. Pesquisem depois.
      return this.http.get<movies>(`${environment.baseApiUrl}/movies`)
                .pipe(
                  map(obj => obj),
                  catchError(e => this.errorHandler(e))
                )
    }

    create(formData: FormData): Observable<movies> {
      return this.http.post<movies>(`${environment.baseApiUrl}/movies`, formData)
      // .pipe(
      //   map(obj => obj),
      //   catchError(e => this.errorHandler(e))
      // )
    }


    errorHandler(e: any): Observable<any> {
      let errors = [];
      for(let er of e.error.message) {
        errors.push(er)
      }
      let str_errors = JSON.stringify(errors);
      throw new Error(str_errors)
      return EMPTY;
    }
}
