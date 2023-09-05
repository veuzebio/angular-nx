import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() text: string | null = null;
  @Input() textSize: 'default' | 'large' | 'extraLarge' = 'default';
  @Input() textPosition: 'left' | 'center' | 'right' = 'center';
}
