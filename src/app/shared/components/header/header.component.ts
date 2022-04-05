import { AuthenticationService } from './../../../features/auth/services/auth.service';
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
    public dialog: MatDialog,
    private router: Router,
    private authServ: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    /*  this.streamMultiply.pipe(header(value => this.shoppingCartService.getNumberOfProducts())).subscribe(value => {
       this.totalProducts.push(value);
     }); */
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

      if (result && result.password && result.email) {
        this.authServ.signIn(result.email, result.password).then(credenciales => {
          if (!credenciales) {
            alert("Login incorrect");
          }
          this.router.navigate(['user']);
        }).catch(error => { alert("Error") })
      }
    });
  }
}
