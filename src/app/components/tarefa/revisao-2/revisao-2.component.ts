import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisao-2',
  templateUrl: './revisao-2.component.html',
  styleUrls: ['./revisao-2.component.css'],
})
export class Revisao2Component implements OnInit {
  @Input() valor_financiado: string;
  @Input() meses: string;
  @Input() juros: string;

  resultados: Array<{ mes: number; parcela: number; amortizacao: number }> = [];

  constructor() {}

  ngOnInit() {}

  getAmortizacao() {
    return Number(this.valor_financiado) / Number(this.meses);
  }

  getTabelaPrice() {
    for (let i = 0; i < this.meses.length; i++) {
      //this.resultados.mes[i];
    }
  }
}
