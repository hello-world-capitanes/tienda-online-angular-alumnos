import productsJson from './products.json';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = (productsJson as any);

  constructor() {
  }

  get products(): Product[] {
    return this._products;
  }
  
}
