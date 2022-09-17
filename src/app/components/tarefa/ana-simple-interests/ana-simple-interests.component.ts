import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana-simple-interests',
  templateUrl: './ana-simple-interests.component.html',
  styleUrls: ['./ana-simple-interests.component.css'],
})
export class AnaSimpleInterestsComponent implements OnInit {
  @Input() capital: string;
  @Input() rate: string;
  @Input() time: string;

  constructor() {}

  ngOnInit() {}

  getInterestResult() {
    return Number(this.capital) * (Number(this.rate) / 100) * Number(this.time);
  }
}
