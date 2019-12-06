import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';
import { NivelService } from 'src/app/service/nivel.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public curso: any;
  public pegaRetornoCurso$: Subscription

  Prof = false
  constructor(private consulta: ConsultaService, private nivel : NivelService) { }

  ngOnInit() {
    this.consulta.listCursos()
    this.pegaRetornoCurso$ = this.consulta.pegaRetornoCurso$.subscribe(() => {
      this.curso = this.consulta.Curso
      console.log(this.curso);
    })
    this.Prof = this.nivel.verificaURL("Prof")
  }

}
