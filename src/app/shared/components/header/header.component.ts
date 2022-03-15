import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { SideBarServiceService } from 'src/app/services/sideBarService/side-bar-service.service';
import { UserFormComponent } from 'src/app/user/components/user-form/user-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  toggleActive: boolean = false;
  mensajeBienvenida: string = "Iniciar Sesión";
  logeado: boolean = false;
  perfil: string = "Invitado";

  constructor(
    public dialog: MatDialog,
    private sidenav: SideBarServiceService) {}

  ngOnInit(): void {

  }

  openLogin(): void {
    if (!this.logeado){

      const dialogRef = this.dialog.open(LoginComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (!result[0]){
          return;
        }

        if (result[0] && !result[0].password){
          this.openRegisterWindow(result[0]);
        }

        if (result[0] && result[0].password && result[0].email){
          this.logeado = true;
          this.mensajeBienvenida = "Hola! "+ result[1].getNombre();
          this.perfil = result[1].getNombre();
        }
      });
    }
  }

  activateSideNav(){
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }

  openRegisterWindow(objeto: any){

      let datosLogin: any;
      const dialogRef = this.dialog.open(UserFormComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (!result){
          return;

        } else {
          this.mensajeBienvenida = "Hola! "+ result.nombre;
          this.perfil = result.nombre;
          this.logeado = true;
        }
      });

  }

}

