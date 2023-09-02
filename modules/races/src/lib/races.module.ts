import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { SharedServicesModule } from 'modules/shared/services';
import { RaceDetailComponent } from './components/race-detail/race-detail.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { racesRoutes } from './lib.routes';
import { RaceService } from './services/race/race.service';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(racesRoutes)],
  providers: [
    provideRouter(racesRoutes, withComponentInputBinding()),
    RaceService,
  ],
  declarations: [RaceListComponent, RaceDetailComponent],
})
export class RacesModule {}
