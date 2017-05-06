import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/card.enum';
import { CardService } from '../../shared/card.service';
import { CardData } from '../../shared/card.service';
import { Input } from '@angular/core';
import { Icon } from '../icon/icon.component';

@Component({
  selector: 'app-cards',
  templateUrl: './all-cards.component.html'
})
export class CardsComponent implements OnInit {

  @Input()
  public card: Card;
  public cards = Card;
  public icons = Icon;
  public cardData: CardData;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getAllCards()
      .subscribe(allCards => this.cardData = allCards);
  }

}
