import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostrarContrasena]'
})
export class MostrarContrasenaDirective {

  constructor(private element?: ElementRef) { }

  public mostrarContrasena(){
    if (!!this.element){
      this.element.nativeElement.style.visibility = "initial";
    }
  }

}
