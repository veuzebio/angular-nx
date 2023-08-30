import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { skillsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(skillsRoutes)],
})
export class SkillsModule {}
