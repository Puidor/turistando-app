import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LugarModel } from './lugar.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http: HttpClient) {}

  salvar(lugar: LugarModel): Observable<LugarModel> {
    return this.http.post<LugarModel>('http://localhost:3000/lugares', lugar);
  }

  obterTodos(): Observable<LugarModel[]> {
    return this.http.get<LugarModel[]>('http://localhost:3000/lugares');
  }
}
