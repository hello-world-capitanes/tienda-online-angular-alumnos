import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductHighlight]'
})
export class ProductHighlightDirective {

  constructor(private element?:ElementRef) { }

  private _highlight(color:string){
    if(!!this.element){
      this.element.nativeElement.style.background=color;
    }

  }

  @HostListener("mouseenter") onMouseEnter(){
    this._highlight("red");
  }

  @HostListener("mouseleave") onMouseLeave(){
    this._highlight("white");
  }

}
