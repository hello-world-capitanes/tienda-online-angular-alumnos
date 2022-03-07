import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[appProductHighlight]'})
export class ProductHighlightDirective{
@Input('color') color: string = 'lightblue';

constructor(private element: ElementRef){}

private highlight(color: string) {
  this.element.nativeElement.style.backgroundColor = color;
}
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.color);
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}
}
