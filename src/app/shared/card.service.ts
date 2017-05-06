import { Injectable } from '@angular/core';
import { WornType } from './card.enum';
import * as Cards from './cards';
import { Card } from './card.enum';
import { Observable } from 'rxjs/Observable';
import { Classes } from './classes.enum';
import { Dice } from './dice.enum';
import { ItemType } from './item-type.enum';
import { ItemRangeType } from './item-type.enum';

export interface ItemCard {
  worn: WornType;
  type: ItemType;
  rangeType?: ItemRangeType;
  cost: number;
  dices?: Dice[];
}

export interface SkillCard {
  fatigueCost?: number|'X';
  xpCost?: number;
}

export interface CardData {
  [key: string]: SkillCard|ItemCard;
}

@Injectable()
export class CardService {

  private allCards: CardData;
  private classSkills = {
    [Classes.knight]: Cards.knightSkillCards,
    [Classes.disciple]: Cards.disciplesSkillCards,
  };
  private wornItems = {
    [WornType.armor]: Cards.armorItems,
    [WornType.oneHand]: Cards.oneHandItems,
    [WornType.twoHands]: Cards.twoHandItems,
    [WornType.other]: Cards.otherItems,
  };

  constructor() {
  }

  getItemCards(type: WornType): Observable<Card[]> {
    return Observable.of(this.wornItems[type]);
  }

  getSkillCards(profession: Classes): Observable<Card[]> {
    return Observable.of(this.classSkills[profession]);
  }

  getAllCards(): Observable<CardData> {
    if (this.allCards) {
      return Observable.of(this.allCards);
    }
    return Observable.of(Cards.allCards.reduce((cumm, curr) => ({
        [curr]: Cards.cardMeta[curr] ? Cards.cardMeta[curr] : {},
        ...cumm
    }), {}))
      .do(data => this.allCards = data);
  }

}
