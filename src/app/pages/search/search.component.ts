import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   tituloAEnviar='Titulo enviado desde el padre al hijo';

  resultadoRecibidoDelHijo: number = 0;

  
  onResultadoCalculado(resultado: number) {
    this.resultadoRecibidoDelHijo = resultado;
  }
}
