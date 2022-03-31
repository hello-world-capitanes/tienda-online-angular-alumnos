import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from 'src/app/user/components/user-form/user-form.component';
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

/*   constructor(
    public dialog: MatDialog,
    private sidenav: SideBarServiceService) {} */

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

  /* penRegisterWindow(objeto: any){

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
    const dialogRef = this.matDialog.open(SignInFormComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (result && !result.password) {
        //this.openSignUpForm(result);
      }

      if(result && result.password && result.email){
        alert('Logged');
      }
    });
  }

  private openSignUpForm() {
/*     const dialogRef = this.matDialog.open(SignUpFormComponent, {
      data: { email: user.email },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(); */
  }

}
