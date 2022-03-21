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


  constructor(private sidenavService: SideBarServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }


  toggleNav(){
    this.sidenavService.close();
  }


  getSidenavService(){
    return this.sidenavService;
  }

  vaciarCarrito(){
    this.sidenavService.vaciar();
  }

  tramitarPedido(){

  }

  getCantitadTotal(){
    return 5;
  }


}
