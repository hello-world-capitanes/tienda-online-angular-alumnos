import productsJson from './products.json';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductApiService } from './product-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = (productsJson as any);
  private _products$: Observable<Product[]>;

  constructor(
    private productApiService: ProductApiService,
  ) {
    this._products$ = this.productApiService.getProducts();
  }

  get products(): Product[] {
    return this._products;
  }

  get products$(): Observable<Product[]> {
    return this._products$;
  }

}
