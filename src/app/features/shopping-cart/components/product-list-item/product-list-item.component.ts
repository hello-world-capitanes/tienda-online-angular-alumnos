import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/features/product/models/product.model';
import { PriceService } from 'src/app/shared/services/price.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input("product") product!: Product;


  constructor(
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {

  }

  getPrice(): string {
    return (!!this.product && !Number.isNaN(this.product?.price)) ?
      this.priceService.getPrice(this.product.price) :
      "-";
  }

  getUnits(): number {
    return !!this.product ? this.shoppingCartService.getUnitsOfProduct(this.product) : 1
  }

  addToShoppingCart() {
    this.shoppingCartService.addProduct(this.product);
  }

  deleteFromShoppingCart() {
    this.shoppingCartService.deleteProduct(this.product);
  }

}
