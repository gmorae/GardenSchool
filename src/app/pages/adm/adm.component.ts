import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {
  public user: any;
  public aluno: any;
  public prof : any
  public pegaRetornoAluno$: Subscription
  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.listaUser()
    this.pegaRetornoAluno$ = this.consulta.pegaRetornoUser$.subscribe(() => {
      this.user = this.consulta.User
      this.aluno = this.consulta.filtro(this.user, 3).length
      console.log(this.aluno);
      this.prof = this.consulta.filtro(this.user, 2).length
      
    })
  }

}
