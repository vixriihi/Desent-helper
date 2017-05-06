import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './card.service';
import { CharacterService } from './character.service';
import { ModuleWithProviders } from '@angular/core';
import { ClassesService } from './classes.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavBarComponent],
  providers: [],
  exports: [NavBarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CardService,
        ClassesService,
        CharacterService
      ]
    };
  }
}
