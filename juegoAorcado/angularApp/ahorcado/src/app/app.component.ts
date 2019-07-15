import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //propiedades de la clase
  title = 'ahorcado';
  palabra = 'CAMINAR';
  palabraOculta = '';
  intentos = 0;

  gano = false;
  pierde = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }
  // evento del mouse
  probar(letra) {

    this.exiteLetra(letra);

    const palabraOcualtaArreglo = this.palabraOculta.split(' ');

    for (let d = 0; d < this.palabra.length; d++) {

      if (this.palabra[d] === letra) {
        palabraOcualtaArreglo[d] = letra;
      }

    }
    this.palabraOculta = palabraOcualtaArreglo.join(' ');
    this.ganaJuego();
  }

  ganaJuego() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    console.log(palabraArr);
    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('Usuario Gano');
    }
    if (this.intentos >= 9) {
      this.pierde = true;
    }

  }
  exiteLetra( letra ) {
    if (this.palabra.indexOf(letra) >= 0) {
      console.log('si hay letra: ' + letra);

    } else {
      console.log('no hay letra: ' + letra);
      this.intentos++;
      if (this.intentos === 9) {
        console.log('perdiste ');
        this.intentos = 0;
      }
    }
  }

}
