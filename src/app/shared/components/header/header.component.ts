import { UserFirestoreService } from './../../../features/user/services/user-firestore.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignUpModalComponent } from 'src/app/features/authentication/components/sign-up-modal/sign-up-modal.component';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { User } from 'src/app/features/user/models/user.model';
import { SignInModalComponent } from '../../../features/authentication/components/sign-in-modal/sign-in-modal.component';
import { PriceService } from '../../services/price.service';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleShoppingCartEvent = new EventEmitter<void>();

  constructor(
    private authService: AuthenticationService,
    /*     private router: Router, */
    private matDialog: MatDialog,
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
    /*     private snackBar: MatSnackBar,
        private userService: UserFirestoreService */
  ) { }

  ngOnInit(): void { }

  getNumberOfProducts(): number | null {
    const total: number = this.shoppingCartService.getNumberOfProducts();
    return Number.isNaN(total) || total === 0 ? null : total;
  }

  getTotalPrice(): string | null {
    const total: number = this.shoppingCartService.getTotalPrice();
    return Number.isNaN(total) || total === 0
      ? null
      : this.priceService.getPrice(total);
  }

  toggleShoppingCart() {
    this.toggleShoppingCartEvent.emit();
  }

  openSigninForm() {
    const dialogRef = this.matDialog.open(SignInModalComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      if (!result?.password) {
        this.openSignUpForm(result as User);
      }

      if (!!result?.email && !!result?.password) {
        /*         this.authService.signIn(result.email, result.password)
          .then(credentials => {
            if (!credentials) {
              alert("No credentials");
            }
            this.router.navigate(['user', 1]);
          }).catch(error => {
            this.snackBar.openFromComponent(ErrorSnackbarComponent, {
              data: {
                error: error?.message
              }
            });
          }); */
      }
    });
  }

   private openSignUpForm(user: User) {
/*     const dialogRef = this.matDialog.open(SignUpModalComponent, {
      data: { email: user.email },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((userSignUp) => {
      if (!userSignUp) {
        return;
      }
      this.authService.login(userSignUp).then((userCredential) => {
        if (!userCredential) {
          alert("no credencial de usuario");
        }

        this.authService.signUp(userSignUp).then((userCredential) => {
          if (!userCredential) {
            return;
          }
          this.userLogged = (!!userCredential?.user ? userCredential?.user : null);
        })
      });
    },
  } */
}
}
