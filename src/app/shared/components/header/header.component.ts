import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { User } from 'src/app/features/user/models/user.model';
import { SignInModalComponent } from '../../../features/authentication/components/sign-in-modal/sign-in-modal.component';
import { PriceService } from '../../services/price.service';
import { AuthenticationService } from './../../../features/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleShoppingCartEvent = new EventEmitter<void>();

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
    public dialog: MatDialog,
    private authServ: AuthenticationService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    /*  this.streamMultiply.pipe(header(value => this.shoppingCartService.getNumberOfProducts())).subscribe(value => {
       this.totalProducts.push(value);
     }); */
  }
  /*   private snackBar: MatSnackBar
    { }
   */

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
    const dialogRef = this.matDialog.open(SignInModalComponent, {
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
