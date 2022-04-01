import { AuthenticationService } from './../../../core/services/Authentication/authentication.service';
import { UserService } from './../../../features/user/services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { PriceService } from '../../utils/price.service';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleShoppingCartEvent = new EventEmitter<void>();

  constructor(
    private matDialog: MatDialog,
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
    private route: Router,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
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
        if(this.authService.logIn(result.email, result.password))
        {
          // this.route.navigate(["user", result.email]);
          this.route.navigate(["user"]);
        }
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
