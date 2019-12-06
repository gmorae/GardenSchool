import { Component, OnInit } from '@angular/core';
import { NivelService } from 'src/app/service/nivel.service';
import { ConsultaService } from 'src/app/service/consulta.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  public atividade: any;
  public pegaRetornoAtividade$: Subscription
  User = false
  constructor(
    private nivel : NivelService,
    private consulta : ConsultaService
  ) { }

  ngOnInit() {
    this.User = this.nivel.verificaURL("User")
    this.consulta.listAtividade()
    this.consulta.pegaRetornoAtividade$.subscribe(() => {
      this.atividade = this.consulta.Atividade
      console.log(this.consulta.Atividade);
      
    })
  }

}
