import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-cost',
  templateUrl: './item-cost.component.html'
})
export class ItemCostComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
