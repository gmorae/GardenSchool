import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public curso: any;
  public pegaRetornoCurso$: Subscription

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.listCursos()
    this.pegaRetornoCurso$ = this.consulta.pegaRetornoCurso$.subscribe(() => {
      this.curso = this.consulta.Curso
      console.log(this.curso);
    })
  }

}
