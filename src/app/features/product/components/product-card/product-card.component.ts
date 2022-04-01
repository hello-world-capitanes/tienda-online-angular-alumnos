import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/features/shopping-cart/services/shopping-cart.service';
import { PriceService } from 'src/app/shared/utils/price.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product!: Product;

  units: number = 0;
  private subscripcion: Subscription;

  constructor(
    private priceService: PriceService,
    private shoppingCartService: ShoppingCartService,
  ) {

    this.subscripcion = this.shoppingCartService.shoppingCartItems$.subscribe( productosCarrito => {

      if (productosCarrito.length > 0){
        productosCarrito.forEach( (elemento1) => {

                if ( elemento1.product.id === this.product.id){
                  this.units = elemento1.units;
                }

                else if (!productosCarrito.some( (elemento2) => elemento2.product.id == this.product.id)){
                  this.units = 0;
                }
              })
      } else {
        this.units = 0;
      }
    })
  }

  ngOnInit(): void {
    this.units = this.shoppingCartService.getUnitsInCart(this.product);
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  getPrice(): string {
    return (!!this.product && !Number.isNaN(this.product?.price)) ?
      this.priceService.getPrice(this.product.price) :
      "-";
  }

  addToShoppingCart() {
    this.units++;
    this.shoppingCartService.addProduct(this.product);
  }

  deleteFromShoppingCart() {
    this.units--;
    this.shoppingCartService.deleteProduct(this.product);
  }

}
