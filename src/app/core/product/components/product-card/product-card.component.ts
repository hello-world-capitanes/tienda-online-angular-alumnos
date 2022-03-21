import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from 'src/app/shared/utils/price.service';
import { ShoppingCartService } from 'src/app/core/shopping-cart/services/shopping-cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product!: Product;

  units: number = 0;

  constructor(
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    this.units = this.shoppingCartService.getUnitsInCart(this.product);
  }

  getPrice(): string {
    return (!!this.product && !Number.isNaN(this.product?.price)) ?
      this.priceService.getPrice(this.product.price) :
      "-";
  }

  addToShoppingCart() {
    this.shoppingCartService.addProduct(this.product);
    this.units++;
  }

  deleteFromShoppingCart() {
    this.shoppingCartService.deleteProduct(this.product);
    this.units--;
  }

}
