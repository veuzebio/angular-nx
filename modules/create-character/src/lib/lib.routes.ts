import { Route } from '@angular/router';
import { CreateCharacterPageComponent } from './components';

export const createCharacterRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateCharacterPageComponent,
  },
];
