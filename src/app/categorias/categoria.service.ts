import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from './categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  salvar(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(
      'http://localhost:3000/categorias',
      categoria
    );
  }

  obterTodas(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>('http://localhost:3000/categorias');
  }
}
