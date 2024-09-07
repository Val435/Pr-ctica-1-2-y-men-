import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  @Input()
  tituloARecibir: string='';
  
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  @Output() resultadoCalculado = new EventEmitter<number>();
  sumameEsta() {
    this.resultado = parseFloat(this.num1.toString()) + parseFloat(this.num2.toString());
    this.resultadoCalculado.emit(this.resultado); 
  }
}
