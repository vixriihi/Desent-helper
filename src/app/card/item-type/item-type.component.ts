import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html'
})
export class ItemTypeComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
