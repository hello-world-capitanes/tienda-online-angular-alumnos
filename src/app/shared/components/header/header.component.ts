import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SignInModalComponent } from 'src/app/features/authentication/components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from 'src/app/features/authentication/components/sign-up-modal/sign-up-modal.component';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { User } from 'src/app/features/user/models/user.model';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleShoppingCartEvent = new EventEmitter<void>();

  userSub!: Subscription;
  userLogged!: User | null;

  constructor(
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthenticationService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.getUserLogged().subscribe((user) => {
      if (!!user) {
        this.userLogged = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

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
    const dialogRef = this.matDialog.open(SignUpModalComponent, {
      data: { email: user.email },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((userSignUp) => {
      if (!userSignUp) {
        return;
      }

      /*       this.authService.signUp(userSignUp).then((userCredential) => {
        if (!userCredential) {
          return;
        }
        this.userLogged = (!!userCredential?.user ? userCredential?.user : null);
      }) */
    });
  }

}
