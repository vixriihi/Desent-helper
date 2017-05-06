import { Component, OnInit, OnDestroy } from '@angular/core';
import { WornType } from '../../shared/card.enum';
import { Card } from '../../shared/card.enum';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../shared/card.service';

@Component({
  selector: 'app-worn',
  templateUrl: './worn.component.html'
})
export class WornComponent implements OnInit, OnDestroy {

  public wornType: WornType;
  public wornTypes = WornType;
  public itemCards: Card[] = [];
  public active: number;

  private subParam: Subscription;

  constructor(private route: ActivatedRoute,
              private cardService: CardService) { }

  ngOnInit() {
    this.subParam = this.route.params.subscribe(params => {
      this.wornType = params['worn'];
      this.updateItems(this.wornType);
    });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }

  updateItems(worn: WornType) {
    this.active = undefined;
    this.cardService.getItemCards(worn)
      .subscribe(itemCards => this.itemCards = itemCards);
  }

  toggleActive(index: number) {
    this.active = this.active === index ? this.active = null : index;
  }

}
