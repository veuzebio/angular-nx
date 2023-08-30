import { Route } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        title: 'Character Sheet',
        component: CharacterSheetComponent
    }
];
