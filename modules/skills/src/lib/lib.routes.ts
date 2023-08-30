import { Route } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';

export const skillsRoutes: Route[] = [
  { 
    path: '', 
    title: 'Skills',
    component: SkillListComponent
  } 
];
