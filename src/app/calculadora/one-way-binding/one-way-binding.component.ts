import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {
  ngOnInit(): void {
    
  }
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  pressKey1(event: any) {
    this.num1 = parseFloat(event.target.value);
    console.log('Number 1:', this.num1);
  }


  pressKey2(event: any) {
    this.num2 = parseFloat(event.target.value);
    console.log('Number 2:', this.num2);
  }

  sum() {
    this.resultado = this.num1 + this.num2;
  }

}
