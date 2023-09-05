import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {}
