import { Component, OnInit } from '@angular/core';
import { NivelService } from 'src/app/service/nivel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  adm = false
  Prof = false
  User = false

  constructor(private nivel : NivelService) { }

  ngOnInit() {
    this.adm = this.nivel.verificaURL("Adm")
    this.User = this.nivel.verificaURL("User")
    this.Prof = this.nivel.verificaURL("Prof")

  }

}
