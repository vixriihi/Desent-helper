import { Injectable } from '@angular/core';
import { Classes } from './classes.enum';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassesService {

  private classes: Classes[] = [
    Classes.disciple,
    Classes.knight
  ];

  constructor() { }

  getAllClasses() {
    return Observable.of(this.classes);
  }
}
