import { Category } from './../models/category.model';
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
  private _category: string|undefined = "fruta";

  constructor(
    private productApiService: ProductApiService,
  ) {
    this._products$ = this.productApiService.getProducts(this._category);
  }

  addProduct(product: Product): Observable<Product> {
    return this.productApiService.addProduct(product);
  }

  get products$(): Observable<Product[]> {
    return this._products$;
  }
<<<<<<< HEAD
  set category(category:string|undefined){

    this._category=category;
  }
  get category(): string|undefined{
    return this._category;
  }

=======

  set products$(products$: Observable<Product[]>)  {
    this._products$ = products$;
  }
  
>>>>>>> develop
}
