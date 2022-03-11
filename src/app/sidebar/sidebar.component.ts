import { SideBarServiceService } from './../services/sideBarService/side-bar-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  modo: MatDrawerMode = 'push';

  @ViewChild('sidenav') public sidenav !: MatSidenav;

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
