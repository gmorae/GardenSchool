import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  public curso: any;
  public pegaRetornoCurso$: Subscription

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.listCursos()
    this.pegaRetornoCurso$ = this.consulta.pegaRetornoCurso$.subscribe(() => {
      this.curso = this.consulta.Curso
    })
  }

}
