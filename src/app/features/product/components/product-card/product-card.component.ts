import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { PriceService } from 'src/app/shared/services/price.service';
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
    this.shoppingCartService.shoppingCartItems$.subscribe(
      (numProduct => this.units = numProduct.length)
    );
  }


  getUnits(): number {
    return !!this.product ? this.shoppingCartService.getUnitsOfProduct(this.product) : 1
  }

  getPrice(): string {
    return (!!this.product && !Number.isNaN(this.product?.price)) ?
      this.priceService.getPrice(this.product.price) :
      "-";
  }

  addToShoppingCart() {
    this.shoppingCartService.addProduct(this.product);
    this.units = this.shoppingCartService.getUnitsOfProduct(this.product);

  }

  deleteFromShoppingCart() {
    this.shoppingCartService.deleteProduct(this.product);
    this.units = this.shoppingCartService.getUnitsOfProduct(this.product);
  }

}
