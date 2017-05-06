import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ClassesComponent } from './classes/classes.component';
import { ItemsComponent } from './items/items.component';
import { WornComponent } from './worn/worn.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'classes'},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:worn', component: WornComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classes/:profession', component: ClassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
