import { Card } from './card.enum';
import { CardData } from './card.service';
import { WornType } from './card.enum';
import { Dice } from './dice.enum';
import { ItemType } from './item-type.enum';
import { ItemCard } from './card.service';
import { SkillCard } from './card.service';
import { ItemRangeType } from './item-type.enum';

// Knight
export const knightSkillCards: Card[] = [
  Card.advance,
  Card.challenge,
  Card.defend,
  Card.defenseTraining,
  Card.guard,
  Card.inspiration,
  Card.oathOfHonor,
  Card.shieldSlam,
  Card.stalwart
];
export const knightItemCards: Card[] = [];
export const knightCards: Card[] = [...knightItemCards, ...knightSkillCards];

// Disciple
export const disciplesSkillCards: Card[] = [
  Card.armorOfFaith,
  Card.blessedStrike,
  Card.cleansingTouch,
  Card.divineFury,
  Card.holyPower,
  Card.prayerOfHealing,
  Card.prayerOfPeace,
  Card.radiantLight,
  Card.timeOfNeed
];
export const disciplesItemCards: Card[] = [
  Card.ironMace,
  Card.woodenShield
];
export const disciplesCards: Card[] = [...disciplesItemCards, ...disciplesSkillCards];

export const oneHandItems: Card[] = [
  Card.lightHammer,
  Card.sling,
  Card.ironShield,
  Card.ironSpear,
  Card.crossbow,
  Card.steelBroadsword,
  Card.dragontoothHammer,
  Card.dwarvenFirebomb,
  Card.heavySteelShield,
  Card.maceOfKellos,
];

export const twoHandItems: Card[] = [
  Card.sunburst,
  Card.immolation,
  Card.elmGreatbow,
  Card.magicStaff,
  Card.ironBattleaxe,
  Card.grindingAxe,
  Card.iceStorm,
  Card.latariLongbow,
  Card.lightningStrike,
  Card.steelGreatsword,
];

export const armorItems: Card[] = [
  Card.leatherArmor,
  Card.chainmail,
  Card.heavyCloak,
  Card.demonhideLeather,
  Card.elvenCloak,
  Card.platemail,
];

export const otherItems: Card[] = [
  Card.scorpionHelm,
  Card.luckyCharm,
  Card.manaWeave,
  Card.ringOfPower,
  Card.ironBoundRing,
  Card.tivalCrystal,
];

export const allCards: Card[] = [
  ...disciplesCards,
  ...knightCards,
  ...oneHandItems,
  ...twoHandItems,
  ...armorItems,
  ...otherItems
];

export const cardMeta: CardData = {
  [Card.armorOfFaith]: <SkillCard> { // Disciple
    xpCost: 1
  },
  [Card.blessedStrike]: <SkillCard> {
    xpCost: 1,
    fatigueCost: 1
  },
  [Card.cleansingTouch]: <SkillCard> {
    xpCost: 1
  },
  [Card.divineFury]: <SkillCard> {
    xpCost: 2
  },
  [Card.holyPower]: <SkillCard> {
    xpCost: 3
  },
  [Card.prayerOfHealing]: <SkillCard> {
    fatigueCost: 1
  },
  [Card.prayerOfPeace]: <SkillCard> {
    fatigueCost: 2,
    xpCost: 2
  },
  [Card.radiantLight]: <SkillCard> {
    fatigueCost: 3,
    xpCost: 3
  },
  [Card.timeOfNeed]: <SkillCard> {
    xpCost: 2
  },
  [Card.advance]: <SkillCard> { // Knight
    xpCost: 1,
    fatigueCost: 1
  },
  [Card.challenge]: <SkillCard> {
    xpCost: 1,
  },
  [Card.defend]: <SkillCard> {
    xpCost: 1,
    fatigueCost: 1
  },
  [Card.defenseTraining]: <SkillCard> {
    xpCost: 2
  },
  [Card.guard]: <SkillCard> {
    xpCost: 2,
    fatigueCost: 2
  },
  [Card.inspiration]: <SkillCard> {
    xpCost: 3,
    fatigueCost: 2
  },
  [Card.oathOfHonor]: <SkillCard> {
    fatigueCost: 1
  },
  [Card.shieldSlam]: <SkillCard> {
    xpCost: 2
  },
  [Card.stalwart]: <SkillCard> {
    xpCost: 3
  },
  [Card.chainmail]: <ItemCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 150,
    dices: [Dice.gray]
  },
  [Card.leatherArmor]: <ItemCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 75,
    dices: [Dice.brown]
  },
  [Card.heavyCloak]: <ItemCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 75
  },
  [Card.demonhideLeather]: <ItemCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 200,
    dices: [Dice.gray]
  },
  [Card.elvenCloak]: <ItemCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 225
  },
  [Card.platemail]: <SkillCard> {
    worn: WornType.armor,
    type: ItemType.armor,
    cost: 250,
    dices: [Dice.black]
  },
  [Card.lightHammer]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.hammer,
    rangeType: ItemRangeType.melee,
    cost: 75,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.sling]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.bow,
    rangeType: ItemRangeType.range,
    cost: 75,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.ironShield]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.shield,
    cost: 50
  },
  [Card.ironSpear]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.axe,
    rangeType: ItemRangeType.melee,
    cost: 75,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.steelBroadsword]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.blade,
    rangeType: ItemRangeType.melee,
    cost: 100,
    dices: [Dice.blue, Dice.red]
  },
  [Card.crossbow]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.bow,
    rangeType: ItemRangeType.range,
    cost: 175,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.dragontoothHammer]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.hammer,
    rangeType: ItemRangeType.melee,
    cost: 250,
    dices: [Dice.blue, Dice.red, Dice.red]
  },
  [Card.dwarvenFirebomb]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.exotic,
    rangeType: ItemRangeType.range,
    cost: 250,
    dices: [Dice.blue, Dice.red, Dice.yellow]
  },
  [Card.heavySteelShield]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.shield,
    cost: 100
  },
  [Card.maceOfKellos]: <SkillCard> {
    worn: WornType.oneHand,
    type: ItemType.hammer,
    rangeType: ItemRangeType.melee,
    cost: 175,
    dices: [Dice.blue, Dice.red, Dice.yellow]
  },
  [Card.sunburst]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.rune,
    rangeType: ItemRangeType.range,
    cost: 125,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.immolation]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.rune,
    rangeType: ItemRangeType.range,
    cost: 150,
    dices: [Dice.blue, Dice.red]
  },
  [Card.elmGreatbow]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.bow,
    rangeType: ItemRangeType.range,
    cost: 100,
    dices: [Dice.blue, Dice.yellow]
  },
  [Card.magicStaff]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.staff,
    rangeType: ItemRangeType.range,
    cost: 150,
    dices: [Dice.blue, Dice.red]
  },
  [Card.ironBattleaxe]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.axe,
    rangeType: ItemRangeType.melee,
    cost: 100,
    dices: [Dice.blue, Dice.red]
  },
  [Card.grindingAxe]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.axe,
    rangeType: ItemRangeType.melee,
    cost: 175,
    dices: [Dice.blue, Dice.red, Dice.red]
  },
  [Card.iceStorm]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.rune,
    rangeType: ItemRangeType.range,
    cost: 150,
    dices: [Dice.blue, Dice.yellow, Dice.yellow]
  },
  [Card.latariLongbow]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.bow,
    rangeType: ItemRangeType.range,
    cost: 200,
    dices: [Dice.blue, Dice.yellow, Dice.yellow]
  },
  [Card.lightningStrike]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.rune,
    rangeType: ItemRangeType.range,
    cost: 200,
    dices: [Dice.blue, Dice.yellow, Dice.yellow]
  },
  [Card.steelGreatsword]: <SkillCard> {
    worn: WornType.twoHands,
    type: ItemType.blade,
    rangeType: ItemRangeType.melee,
    cost: 200,
    dices: [Dice.blue, Dice.red, Dice.yellow]
  },
  [Card.scorpionHelm]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 75
  },
  [Card.luckyCharm]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 100
  },
  [Card.manaWeave]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 125
  },
  [Card.ringOfPower]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 150
  },
  [Card.ironBoundRing]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 150
  },
  [Card.tivalCrystal]: <SkillCard> {
    worn: WornType.other,
    type: ItemType.other,
    cost: 175
  }
};
