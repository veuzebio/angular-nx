import { Route } from '@angular/router';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceDetailComponent } from './components/race-detail/race-detail.component';

export const racesRoutes: Route[] = [
  {
    path: '',
    title: 'Races',
    component: RaceListComponent,
    children: [
      {
        path: ':name',
        component: RaceDetailComponent,
      },
    ],
  },
];
