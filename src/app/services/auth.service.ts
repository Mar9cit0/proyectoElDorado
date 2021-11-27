import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  Autenticar(user:User): Observable<User> {
    console.log('sddss',user);
    console.log('RRRR',this.http.post<User>(`${environment.baseApiUrl}/auth`, user));
    return this.http.post<User>(`${environment.baseApiUrl}/auth`, user)
  }
}
