import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Categoria from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria> {
    return this.http.get<Categoria>('getCategorias');
  }
}
