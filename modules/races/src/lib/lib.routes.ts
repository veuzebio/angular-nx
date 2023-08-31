import { Route } from '@angular/router';
import { RaceListComponent } from './components/race-list/race-list.component';

export const racesRoutes: Route[] = [
  {
    path: '',
    title: 'Races',
    pathMatch: 'full',
    component: RaceListComponent,
  },
];
