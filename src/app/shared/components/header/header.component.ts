import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from 'src/app/core/shopping-cart/services/shopping-cart.service';
import { ModalLoginComponent } from 'src/app/login/modal-login.component';
import { PriceService } from '../../utils/price.service';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
