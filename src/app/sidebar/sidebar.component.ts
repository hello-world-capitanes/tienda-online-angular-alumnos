import { SideBarServiceService } from './../services/sideBarService/side-bar-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  modo: MatDrawerMode = 'push';

  @ViewChild('sidenav') public sidenav !: MatSidenav;

  products: Product[] = [
    new Product("Palmerita", "https://pastelerialaoriental.net/delivery/1351-large_default/palmera-de-chocolate.jpg", "1,74€", "425g" ),
    new Product("Pan", "https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg", "0,90 €", "250g" ),
  ];

  constructor(private sidenavService: SideBarServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleNav(){
    this.sidenavService.close();
  }


  /* console.log(typeof(parseInt(precioArticulo.textContent)); */

  addUnidad(){
    /* console.log("addUnidad");
    contador++;
    unidad.textContent = contador;
    precioTotal.textContent = contador * parseFloat(precioArticulo.textContent); */
    /* console.log(parseFloat(precioArticulo.textContent)); */
  }

  remUnidad(){
      /* if(contador > 1){
          contador--;
          unidad.textContent = contador;
          precioTotal.textContent = contador * parseFloat(precioArticulo.textContent);
      } */

  }

  vaciarCarrito(){
      /* console.log("vaciarCarrito");
      precioTotal.textContent = 0;
      unidad.textContent = 0;
      contador = 0; */
  }

  tramitarPedido(){
  }
}
