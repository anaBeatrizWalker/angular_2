import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana-random-numbers',
  templateUrl: './ana-random-numbers.component.html',
  styleUrls: ['./ana-random-numbers.component.css'],
})
export class AnaRandomNumbersComponent implements OnInit {
  @Input() quantity: string;
  constructor() {}

  ngOnInit() {}

  getRandomNumbers() {
    let numbersList = [];
    for (let i = 0; i < Number(this.quantity); i++) {
      numbersList[i] = Math.trunc(100 * Math.random());
    }
    return numbersList;
  }
}
