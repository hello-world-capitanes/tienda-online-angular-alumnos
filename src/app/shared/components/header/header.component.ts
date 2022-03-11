import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { MatDrawerMode } from '@angular/material/sidenav';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  modo: MatDrawerMode = 'side';

  ngOnInit(): void {

  }

  contador: number = 1;
  precioSumado:number = 0;

  @ViewChild('unidad') unidad?: ElementRef;
  @ViewChild('precioTotal') precioTotal?: ElementRef;
  @ViewChild('precioArticulo') precioArticulo?: ElementRef;

  ngAfterViewInit(): void {
    this.precioTotal?.nativeElement.setAttribute(this.precioArticulo?.nativeElement.value,'');
    console.log(this.precioTotal?.nativeElement.value)
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
      console.log("remUnidad");
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


  openLogin(): void {
      const dialogRef = this.dialog.open(LoginComponent);
  }

}

