import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaService } from 'src/app/service/consulta.service';
import { environment } from 'src/environments/environment';
import { Atividade } from 'src/app/models/atividade.model';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  formAtividade: FormGroup;
  Atividade: Atividade = new Atividade()

  constructor(
    private form: FormBuilder,
    private consulta: ConsultaService
  ) { }

  ngOnInit() {
    this.createFormAtividade(new Atividade())

  }

  createFormAtividade(atividade : Atividade) {
    this.formAtividade = this.form.group({
      nome:         [null, Validators.required],
      descricao:    [null, Validators.required],
      id_professor: 4 
    })
  }

  cadastroAtividade() {
    this.consulta.post(environment.apiAtividade,this.formAtividade.value)
    this.formAtividade.reset(new Atividade());
    window.location.reload()
  }
}
