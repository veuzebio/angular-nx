import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[uiEmphasis]',
  standalone: true,
})
export class EmphasisDirective {
  private readonly enphasisEffect =
    ' hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:-bottom-2 ';
  private classes = '';

  @HostBinding('class')
  get hostClassAttr() {
    return this.classes.concat(this.enphasisEffect);
  }
  set hostClassAttr(value: string) {
    this.classes = value;
  }
}
