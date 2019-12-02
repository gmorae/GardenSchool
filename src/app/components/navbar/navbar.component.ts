import { Component, OnInit } from '@angular/core';
import { NivelService } from 'src/app/service/nivel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  adm = false
  user = false
  constructor(private nivel : NivelService) { }

  ngOnInit() {
    this.adm = this.nivel.verificaURL("Adm")
    this.user = this.nivel.verificaURL("user")
  }

}
