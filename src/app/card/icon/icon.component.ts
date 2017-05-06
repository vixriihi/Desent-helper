import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export enum Icon {
  action = <any> 'action',
  heart = <any> 'heart',
  surge = <any> 'surge',
  fatigue = <any> 'fatigue',
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
