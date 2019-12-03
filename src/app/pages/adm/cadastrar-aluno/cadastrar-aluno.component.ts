import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {
  public user: any;
  public aluno: any;
  public pegaRetornoAluno$: Subscription
  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.listaUser()
    this.pegaRetornoAluno$ = this.consulta.pegaRetornoUser$.subscribe(() => {
      this.user = this.consulta.User
      this.aluno = this.consulta.filtro(this.user, 3)
    })
  }

}
