import { Component, OnInit } from '@angular/core';
import { WornType } from '../../shared/card.enum';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  public worn = WornType;

  constructor() { }

  ngOnInit() {
  }

}
