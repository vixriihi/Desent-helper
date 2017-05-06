import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/card.enum';
import { CardService } from '../../shared/card.service';
import { Classes } from '../../shared/classes.enum';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit, OnDestroy {

  public profession: Classes;
  public skillCards: Card[] = [];
  public active: number;

  public classes = Classes;

  private subParam: Subscription;

  constructor(private route: ActivatedRoute,
              private cardService: CardService) { }

  ngOnInit() {
    this.subParam = this.route.params.subscribe(params => {
      this.profession = params['profession'];
      this.updateSkills(this.profession);
    });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }

  updateSkills(profession: Classes) {
    this.active = undefined;
    this.cardService.getSkillCards(profession)
      .subscribe(skillCards => this.skillCards = skillCards);
  }

  toggleActive(index: number) {
    this.active = this.active === index ? this.active = null : index;
  }

}
