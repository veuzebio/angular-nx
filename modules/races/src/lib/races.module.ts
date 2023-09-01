import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { racesRoutes } from './lib.routes';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceDetailComponent } from './components/race-detail/race-detail.component';
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
