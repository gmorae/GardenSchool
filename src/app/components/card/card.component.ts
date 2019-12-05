import { Component, OnInit } from '@angular/core';
import { NivelService } from 'src/app/service/nivel.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Aluno } from 'src/app/models/aluno.model';
import { Curso } from 'src/app/models/curso.model';
import { Prof } from 'src/app/models/prof.model';
import { ConsultaService } from 'src/app/service/consulta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title: any

  prof = false 
  aluno = false
  curso = false

  formProf: FormGroup;
  formAluno: FormGroup;
  formCurso: FormGroup;

  profI: Prof = new Prof()
  alunoI: Aluno = new Aluno()
  cursoI: Curso = new Curso()

  constructor(
    private nivel : NivelService,
    private form: FormBuilder,
    private consulta: ConsultaService

  ) { }

  ngOnInit() {
    this.verificaModal()
    this.prof = this.nivel.verificaURL("CadastroProf")
    this.aluno = this.nivel.verificaURL("CadastroAluno")
    this.curso = this.nivel.verificaURL("CadastroCurso")
    this.createFormCurso(new Curso())
    this.createFormAluno(new Aluno())    
    this.createFormProf(new Prof())
  }

  //Verificando a URL para mostrar os modals 
  verificaModal(){
    if (this.nivel.verificaURL("CadastroAluno")) {
      return this.title = "aluno"
    }else if(this.nivel.verificaURL("CadastroCurso")){
      return this.title = "curso"
    }else{
      return this.title = "professor"
    }
  } 

  //Criando e validando os formularios na hora do envio
  createFormCurso(curso: Curso) {
    this.formCurso = this.form.group({
      nome:       [null, Validators.required],
      descricao:  [null, Validators.required],
      id_usuario: 1 
    })
  }

  createFormAluno(aluno: Aluno) {
    this.formAluno = this.form.group({
      name:       [null, Validators.required],
      password:   [null, Validators.required],
      email:      [null, Validators.required],
      phone:      [null, Validators.required],
      id_tipo:    3
    })
  }


  createFormProf(prof: Prof) {
    this.formProf = this.form.group({
      name:       [null, Validators.required],
      password:   [null, Validators.required],
      email:      [null, Validators.required],
      phone:      [null, Validators.required],
      id_tipo:    2
    })
  }

  //Enviando os dados para a api
  cadastroCurso() {
    this.consulta.post(environment.apiCurso,this.formCurso.value)
    this.formCurso.reset(new Curso());
    window.location.reload()
  }

  cadastroAluno(){
    this.consulta.post(environment.apiUser, this.formAluno.value)
    this.formAluno.reset(new Aluno())
    window.location.reload()

  }

  cadastroProf(){
    this.consulta.post(environment.apiUser, this.formProf.value)
    this.formProf.reset(new Prof())
    window.location.reload()

  }

}
