import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { racesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(racesRoutes)],
})
export class RacesModule {}
