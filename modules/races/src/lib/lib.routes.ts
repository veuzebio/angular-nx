import { Route } from '@angular/router';
import {
  RaceDetailComponent,
  RacesPageComponent,
  RaceGridComponent,
} from './components';

export const racesRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    title: 'Races',
    component: RaceGridComponent,
  },
  {
    path: 'detail',
    title: 'Races',
    component: RacesPageComponent,
    children: [
      {
        path: ':name',
        component: RaceDetailComponent,
      },
    ],
  },
];
