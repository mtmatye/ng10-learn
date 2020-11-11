import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() highlightColor = 'pink';
  constructor(private el: ElementRef) {
    console.log('el', this.el.nativeElement);
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event): void {
    this.highlight('aqua');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(this.highlightColor);
  }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
