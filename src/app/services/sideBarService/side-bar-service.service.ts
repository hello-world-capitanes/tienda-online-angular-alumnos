import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class SideBarServiceService {
  private sidenav !: MatSidenav;
  private productosEnCarrito: Product[] = new Array();

  public setSidenav(sidenav: MatSidenav){
    this.sidenav = sidenav;
  }

  public setProduct(producto: Product){
    if (this.vacio()){
        this.productosEnCarrito.push(producto);

    } else {

      if (this.productosEnCarrito.some((elemento) => (producto.getName() === elemento.getName()))){
          for (let elemento of this.productosEnCarrito){
              if (elemento?.getName() == producto.getName()){
                elemento.sumarCantidad();
              }
          }

      } else {
          this.productosEnCarrito.push(producto);
      }
    }

  }

  public getProducts(){

    if (!this.vacio){

/*       while (this.productosEnCarrito.some((elemento) => (elemento.getCantidad() === 0)) != null){
          console.log("sakjdjas");
          let indice = this.productosEnCarrito.findIndex((elemento) => (elemento.getCantidad() === 0));
          this.productosEnCarrito.splice(indice,1);
      } */
    }

    return this.productosEnCarrito;
  }

  public vacio(){
    if (this.productosEnCarrito == null){
      return true;
    } else {
      return false;
    }
  }

  public open(){
    return this.sidenav.open();
  }

  public close(){
    return this.sidenav.close();
  }

  public toggle(): void{
    this.sidenav.toggle();
  }
}
