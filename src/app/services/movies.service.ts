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
  getAll(): Observable<movies> {
    return this.http.get<movies>('getMovies')
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      )
  }

  getById(id:any): Observable<movies> {
    console.log( this.http.post<movies>('getMovie/',id));
    return this.http.post<movies>('getMovie/'+id,'');
  }

  create(formData: FormData): Observable<movies> {
    return this.http.post<movies>('movies', formData)
  }

  update(formData: FormData): Observable<movies> {
    return this.http.put<movies>('updateMovies', formData)
  }

  deleteMovie(id:any): Observable<movies> { 
    return this.http.delete<movies>('DeleteMovies/'+id)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      )
  }

  errorHandler(e: any): Observable<any> {
    let errors = [];
    for (let er of e.error.message) {
      errors.push(er)
    }
    let str_errors = JSON.stringify(errors);
    throw new Error(str_errors)
    return EMPTY;
  }
}
