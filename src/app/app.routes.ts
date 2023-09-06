import { Route } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    title: 'Character Sheet',
    component: CharacterSheetComponent,
  },
  {
    path: 'races',
    loadChildren: () => import('modules/races').then((m) => m.RacesModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('modules/create-character').then((m) => m.CreateCharacterModule),
  },
];
