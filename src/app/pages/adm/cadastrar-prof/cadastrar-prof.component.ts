import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.component.html',
  styleUrls: ['./cadastrar-prof.component.css']
})
export class CadastrarProfComponent implements OnInit {
  public user: any;
  public prof: any;
  public pegaRetornoAluno$: Subscription
  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.listaUser()
    this.pegaRetornoAluno$ = this.consulta.pegaRetornoUser$.subscribe(() => {
      this.user = this.consulta.User
      this.prof = this.consulta.filtro(this.user, 2)
    })
  }

}
