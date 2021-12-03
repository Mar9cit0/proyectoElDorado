import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  Autenticar(user:User): Observable<User> { 
    return this.http.post<User>('auth', user);
  }
 
}
