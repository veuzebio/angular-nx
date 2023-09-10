import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import {
  CardComponent,
  CardContentComponent,
  ListComponent,
  ListItemComponent,
  TitleComponent,
} from 'modules/shared/ui';

import {
  RaceDetailComponent,
  RaceGridComponent,
  RaceListComponent,
  RacesPageComponent,
} from './components';
import { racesRoutes } from './lib.routes';

@NgModule({
  declarations: [
    RacesPageComponent,
    RaceListComponent,
    RaceDetailComponent,
    RaceGridComponent,
  ],
  imports: [
    TitleComponent,
    CardComponent,
    CardContentComponent,
    ListComponent,
    ListItemComponent,
    CommonModule,
    RouterModule.forChild(racesRoutes),
  ],
  providers: [provideRouter(racesRoutes, withComponentInputBinding())],
})
export class RacesModule {}
