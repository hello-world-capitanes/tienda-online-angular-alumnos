import { Product } from "../../product/models/product.model";

export class ShoppingCartItem {
    static readonly DEFAULT_UNITS = 0;
  
    product: Product;
    units: number;
  
    constructor(product: Product, units: number = ShoppingCartItem.DEFAULT_UNITS) {
      this.product = product;
      this.units = units;
    }
}