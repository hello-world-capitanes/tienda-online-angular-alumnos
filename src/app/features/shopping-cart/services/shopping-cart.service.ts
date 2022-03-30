import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../../product/models/product.model';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCartItems: ShoppingCartItem[] = [];
  private _shoppingCartItems$ = of(this._shoppingCartItems);


  constructor() { }


  get shoppingCartItems$(): Observable<ShoppingCartItem[]>{
    return this._shoppingCartItems$;
  }

  get shoppingCartItems(): Observable<ShoppingCartItem[]> {
    return this._shoppingCartItems$;
  }
  // get shoppingCartItems(): ShoppingCartItem[] {
  //   return this._shoppingCartItems;
  // }

  private getProductIndex(product: Product): number {
    if (!product || !product?.name || !product?.price) {
      return -1;
    }
    return this._shoppingCartItems.findIndex(item => item?.product?.name === product?.name);
  }

  getUnitsOfProduct(product: Product): number {
    const productIndex = this.getProductIndex(product);
    return (productIndex >= 0) ? this._shoppingCartItems[productIndex]?.units : 0;

  }

  addProduct(product: Product) {
    if (!product || !product?.name || !product?.price) {
      return;
    }

    const productIndex = this.getProductIndex(product);
    if (productIndex >= 0) {
      this._shoppingCartItems[productIndex].units++;

    } else {
      this._shoppingCartItems.push({ product, units: 1 });
    }
    console.log("suma: ", this._shoppingCartItems[productIndex]);

  }

  deleteProduct(product: Product) {
    if (!product || !product?.name || !product?.price) {
      return;
    }

    const productIndex = this.getProductIndex(product);

    if (productIndex >= 0) {
      this._shoppingCartItems[productIndex].units--;
      if (this._shoppingCartItems[productIndex].units <= 0) {
        this._shoppingCartItems.splice(productIndex, 1);
      }
    }
    console.log("resta: ", this._shoppingCartItems[productIndex]);

  }

  empty(): void {
    this._shoppingCartItems = [];
  }

  getNumberOfProducts(): number {
    let total = 0;
    if (!!this._shoppingCartItems && this._shoppingCartItems.length > 0) {
      this._shoppingCartItems.forEach((item) => {
        total += (item?.units);
      });
    }
    return total;
  }

  getTotalPrice(): number {
    let total = 0;
    if (!!this._shoppingCartItems && this._shoppingCartItems.length > 0) {
      this._shoppingCartItems.forEach((item) => {
        total += (item?.product?.price * item?.units)
      });
    }
    return total;
  }

}
