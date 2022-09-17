import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana-timer',
  templateUrl: './ana-timer.component.html',
  styleUrls: ['./ana-timer.component.css'],
})
export class AnaTimerComponent implements OnInit {
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  constructor() {}

  ngOnInit() {}

  getMinutes() {
    return Math.trunc(this.counter / 60);
  }

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }
}
