import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  public User: any;
  public pegaRetornoUser$: Subject<any> = new Subject<any>();
  constructor(public api: ApiService) { }

  listaUser() {
    this.api.get(environment.apiUser).subscribe(res => {
      this.User = res
      this.pegaRetornoUser$.next(true)
    })
  }

  filtro(user: any[], value: any) {
    var filtrados = user.filter(function (record) {
        return record.id_tipo == value;
    });
    return filtrados;
  }
}

