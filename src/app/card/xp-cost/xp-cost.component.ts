import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-xp-cost',
  templateUrl: './xp-cost.component.html'
})
export class XpCostComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
