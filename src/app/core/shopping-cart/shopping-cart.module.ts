import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
