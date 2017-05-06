import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html'
})
export class DicesComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
