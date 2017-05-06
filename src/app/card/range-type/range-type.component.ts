import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-range-type',
  templateUrl: './range-type.component.html'
})
export class RangeTypeComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
