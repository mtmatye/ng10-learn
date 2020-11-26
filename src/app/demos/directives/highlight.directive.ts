import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor = 'blue';
  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor);
  }
  ngOnInit(): void {
    if (this.highlightColor !== 'blue') {
      this.highlight(this.highlightColor);
    }
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event): void {
    this.highlight('aqua');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('red');
  }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
