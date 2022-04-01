import { SignUpFormComponent } from './../sign-up-form/sign-up-form.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { PriceService } from '../../utils/price.service';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';

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

  ngOnInit(): void {}

  @Output() toggleShoppingCartEvent = new EventEmitter<void>();

  constructor(
    private matDialog: MatDialog,
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

/*   openLogin(): void {
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
  } */

  /* openRegisterWindow(objeto: any){

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

  } */

  getNumberOfProducts(): number | null {
    const total: number = this.shoppingCartService.getNumberOfProducts();
    return (Number.isNaN(total) || total === 0) ? null : total;
  }

  getTotalPrice(): string | null {
    const total: number = this.shoppingCartService.getTotalPrice();
    return (Number.isNaN(total) || total === 0) ? null : this.priceService.getPrice(total);
  }

  toggleShoppingCart() {
    this.toggleShoppingCartEvent.emit();
  }

  openSigninForm() {
    const dialogRefSignIn = this.matDialog.open(SignInFormComponent, {
      width: '350px',
    });

    dialogRefSignIn.afterClosed().subscribe( result => {
      if (!result[0]){
        return;
      }

      if (result[0] && !result[0].password){
        this.openSignUpForm();
      }

      if (result[0] && result[0].password && result[0].email){
        this.logeado = true;
        this.mensajeBienvenida = "Hola! "+ result[1];
        this.perfil = result[1];
      }
    });
  }

  private openSignUpForm() {
    const dialogRefSignUp = this.matDialog.open(SignUpFormComponent, {

    });

    dialogRefSignUp.afterClosed().subscribe( result => {

      if (!result){
        return;

      } else {
        this.mensajeBienvenida = "Hola! "+ result.nombre;
        this.perfil = result.name;
      }

    });
  }

}
