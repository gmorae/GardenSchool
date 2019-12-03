import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {
  public aluno: any;
  public pegaRetornoAluno$: Subscription
  constructor(private consulta : ConsultaService) { }

  ngOnInit() {
    this.consulta.listaAluno()
    this.pegaRetornoAluno$ = this.consulta.pegaRetornoAluno$.subscribe(() => {
      this.aluno = this.consulta.aluno      
    })
  }

}
