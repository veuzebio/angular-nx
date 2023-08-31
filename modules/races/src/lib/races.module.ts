import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { racesRoutes } from './lib.routes';
import { RaceListComponent } from './components/race-list/race-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(racesRoutes)],
  declarations: [RaceListComponent],
})
export class RacesModule {}
