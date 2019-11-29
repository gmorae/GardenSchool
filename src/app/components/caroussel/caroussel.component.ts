import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    function typeWrite(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function (letra, i) {

        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 75 * i)

      });
    }
    const titulo = document.querySelector('.titulo-principal');
    typeWrite(titulo);

  }

}
