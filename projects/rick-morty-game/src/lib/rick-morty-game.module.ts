import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { RickMortyGameComponent } from './rick-morty-game.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [RickMortyGameComponent],
  imports: [SharedModule],
  exports: [RickMortyGameComponent]
})
export class RickMortyGameModule {}
