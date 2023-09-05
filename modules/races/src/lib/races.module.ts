import {
  TitleComponent,
  CardComponent,
  CardContentComponent,
  ListComponent,
  ListItemComponent,
} from 'modules/shared/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { racesRoutes } from './lib.routes';
import {
  RaceDetailComponent,
  RaceGridComponent,
  RaceListComponent,
  RacesPageComponent,
} from './components';

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
