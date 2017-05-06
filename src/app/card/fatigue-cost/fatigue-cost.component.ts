import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-fatigue-cost',
  templateUrl: './fatigue-cost.component.html'
})
export class FatigueCostComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
