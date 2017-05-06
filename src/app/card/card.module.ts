import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ClassComponent } from './class/class.component';
import { CardsComponent } from './all-cards/all-cards.component';
import { IconComponent } from './icon/icon.component';
import { XpCostComponent } from './xp-cost/xp-cost.component';
import { FatigueCostComponent } from './fatigue-cost/fatigue-cost.component';
import { ClassesComponent } from './classes/classes.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './items/items.component';
import { WornComponent } from './worn/worn.component';
import { ItemCostComponent } from './item-cost/item-cost.component';
import { DicesComponent } from './dices/dices.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { RangeTypeComponent } from './range-type/range-type.component';

@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule
  ],
  declarations: [
    ClassComponent,
    CardsComponent,
    IconComponent,
    XpCostComponent,
    FatigueCostComponent,
    ClassesComponent,
    ItemsComponent,
    WornComponent,
    ItemCostComponent,
    DicesComponent,
    ItemTypeComponent,
    RangeTypeComponent
  ]
})
export class CardModule { }
