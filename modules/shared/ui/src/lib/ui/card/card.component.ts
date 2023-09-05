import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AfterContentInit {
  @ContentChild(TitleComponent) title?: TitleComponent;

  ngAfterContentInit(): void {
    if (this.title) {
      this.title.textPosition = 'left';
      this.title.textSize = 'default';
    }
  }
}
