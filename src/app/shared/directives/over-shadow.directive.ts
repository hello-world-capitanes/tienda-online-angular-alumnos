import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOverShadow]',
})
export class OverShadowDirective {

  @Input() appOverShadow = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow(this.appOverShadow || 'grey')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow(null);
  }

  constructor(private el: ElementRef) {}

  private setShadow(color: string | null) {

    if(color) {
      this.el.nativeElement.style.boxShadow = '0 2px 8px 0 ' + color
    } else {
      this.el.nativeElement.style.boxShadow = 'none';
    }

  }
}
