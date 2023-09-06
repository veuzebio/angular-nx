import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createCharacterRoutes } from './lib.routes';
import { CreateCharacterPageComponent } from './components';

@NgModule({
  declarations: [CreateCharacterPageComponent],
  imports: [CommonModule, RouterModule.forChild(createCharacterRoutes)],
})
export class CreateCharacterModule {}
