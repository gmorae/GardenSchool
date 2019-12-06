import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  public User: any;
  public Curso: any;
  public Atividade : any
  public pegaRetornoUser$: Subject<any> = new Subject<any>();
  public pegaRetornoCurso$: Subject<any> = new Subject<any>();
  public pegaRetornoAtividade$: Subject<any> = new Subject<any>();


  constructor(public api: ApiService) { }

  listaUser() {
    this.api.get(environment.apiUser).subscribe(res => {
      this.User = res
      this.pegaRetornoUser$.next(true)
    })
  }

  listCursos(){
    this.api.get(environment.apiCurso).subscribe(res => {
      this.Curso = res
      this.pegaRetornoCurso$.next(true)
    })
  }

  listAtividade(){
    this.api.get(environment.apiAtividade).subscribe(res => {
      this.Atividade = res
      this.pegaRetornoAtividade$.next(true)
    })
  }

  filtro(user: any[], value: any) {
    var filtrados = user.filter(function (record) {
        return record.id_tipo == value;
    });
    return filtrados;
  }

  post(api: string, body: any) {
    this.api.post(api, body).subscribe(() => {
      console.log("sucesso");
    }, err => {
      console.log("erro");
    })
  }
}

