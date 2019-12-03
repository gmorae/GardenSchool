import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  public aluno: any;
  public pegaRetornoAluno$: Subject<any> = new Subject<any>();
  constructor(    public api: ApiService) { }

  listaAluno() {
    this.api.get(environment.apiUser).subscribe( res => {
      this.aluno = res
      this.pegaRetornoAluno$.next(true)
    })
  }
  
}
