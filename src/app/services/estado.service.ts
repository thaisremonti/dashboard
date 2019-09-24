import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../model/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  listaTodos(): Observable<Estado> {
    return this.http.get(environment.url + 'api/listaTodos') as Observable<Estado>;
  }

  listaPorEstado(id: any): Observable<any> {
    console.log(id);
    return this.http.get(environment.url.concat('/', id));
  }

  // cadastrarAluno(aluno: Aluno): Observable<any> {
  //   return this.http.post(environment.url, aluno);
  // }

  // editarAluno(id: any, aluno: Aluno): Observable<any> {
  //   return this.http.put(environment.url.concat(id), aluno);
  // }

  // excluirAluno(id: number): Observable<any> {
  //   return this.http.delete(environment.url.concat(id.toString()) );
  // }
}
