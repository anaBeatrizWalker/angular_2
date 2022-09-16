import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() name: string; //Atributo da tag HTML (os atributos são sempre opcionais e string)

  private counter: number = 0;
  
  constructor() {}

  ngOnInit() {}

  getCounter(){
    return this.counter;
  }

  increment(){
    this.counter++;
  }
}
