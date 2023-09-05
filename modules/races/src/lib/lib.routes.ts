import { Route } from '@angular/router';
import { RaceDetailComponent, RacesPageComponent } from './components';

export const racesRoutes: Route[] = [
  {
    path: '',
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
