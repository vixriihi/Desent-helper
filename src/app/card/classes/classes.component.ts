import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../shared/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  constructor(public classesService: ClassesService) { }

  ngOnInit() {
  }

}
