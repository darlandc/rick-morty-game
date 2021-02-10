import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ButtonsComponent]
})
export class SharedModule {}
