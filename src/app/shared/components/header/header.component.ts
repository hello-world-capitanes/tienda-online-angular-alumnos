import { SignUpFormComponent } from './../sign-up-form/sign-up-form.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { PriceService } from '../../utils/price.service';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { ListKeyManager } from '@angular/cdk/a11y';
import { ProfileServiceService } from 'src/app/features/user/services/profile-service/profile-service.service';
import { User } from 'src/app/features/user/models/user.module';

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
    private router: Router,
    private profileService: ProfileServiceService
  ) {
  }

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
        this.openSignUpForm({email: result[0].email});
      }

      if (result[0] && result[0].password && result[0].email){
        this.router.navigateByUrl('/user/');
        this.logeado = true;
        this.mensajeBienvenida = "Hola! "+ result[1];
        this.perfil = result[1];
      }

    });
  }

  private openSignUpForm(data: any) {
    const dialogRefSignUp = this.matDialog.open(SignUpFormComponent, {

    });

    dialogRefSignUp.afterClosed().subscribe( result => {

      if (!result){
        return;

      } else {
        this.mensajeBienvenida = "Hola! "+ result.name;
        this.perfil = result.name;
        let usuario = new User("0", 100, result.name,data.email, result.password);
        this.router.navigateByUrl('/user/5');

        this.profileService.usuario = usuario;

      }
    });
  }

}
