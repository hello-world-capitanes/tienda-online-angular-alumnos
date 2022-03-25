import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PriceService } from '../../../../shared/utils/price.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartItem } from './../../models/shopping-cart-item.model';

interface CartOrder {
  label: string;
  value: string;
  default?: boolean;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Output() closeShoppingCartEvent = new EventEmitter<void>();
  shoppingCartItems: ShoppingCartItem[] = [];

  orderOptions: CartOrder[] = [
    { label: "Según se añadieron", value: "date", default: true },
    { label: "Por categoría", value: "category" },
  ]
  productOrderControl: FormControl;

  constructor(
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
  ) {
    const defaultOption = this.orderOptions.find(option => option?.default)?.value;
    this.productOrderControl = new FormControl(defaultOption, []);
  }

  ngOnInit(): void {
    this.shoppingCartService.shoppingCartItems.subscribe(
      (product => this.shoppingCartItems = product)
    );
  }

  closeShoppingCart() {
    this.closeShoppingCartEvent.emit();
  }

  // getShoppingCartItems(): ShoppingCartItem[] {
  //   return this.shoppingCartService.shoppingCartItems;
  // }

  emptyShoppingCart() {
    this.shoppingCartService.empty();
  }

  getTotalPrice(): string {
    return this.priceService.getPrice(this.shoppingCartService.getTotalPrice());
  }

}
