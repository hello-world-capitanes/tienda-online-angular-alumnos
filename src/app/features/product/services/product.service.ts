import productsJson from './products.json';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductApiService } from './product-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products$: Observable<Product[]>;

  constructor(
    private productApiService: ProductApiService,
  ) {
    this._products$ = this.productApiService.getProducts();
  }

  addProduct(product: Product): Observable<Product> {
    return this.productApiService.addProduct(product);
  }

  get products$(): Observable<Product[]> {
    return this._products$;
  }

  set products$(products$: Observable<Product[]>)  {
    this._products$ = products$;
  }
  
}
