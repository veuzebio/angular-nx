import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { skillsRoutes } from './lib.routes';
import { SkillListComponent } from './skill-list/skill-list.component';
import { UiComponent } from 'modules/shared/ui';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(skillsRoutes), UiComponent],
  declarations: [SkillListComponent],
})
export class SkillsModule {}
