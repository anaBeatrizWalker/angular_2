import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana-compound-interests',
  templateUrl: './ana-compound-interests.component.html',
  styleUrls: ['./ana-compound-interests.component.css'],
})
export class AnaCompoundInterestsComponent implements OnInit {
  @Input() capital: string;
  @Input() rate: string;
  @Input() time: string;

  constructor() {}

  ngOnInit() {}

  getInterestResult() {
    return (
      Number(this.capital) * (1 + Number(this.rate) / 100) ** Number(this.time)
    );
  }
}
