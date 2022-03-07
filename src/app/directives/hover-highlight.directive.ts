import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {


  @Input("hover") color: string = "red";

  constructor(private element?: ElementRef) { }

  private sombrear(color: string){
    if (!!this.element) {
      this.element.nativeElement.style.backgroundColor = color;
    }
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.sombrear(this.color);
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.sombrear("");
  }

}
