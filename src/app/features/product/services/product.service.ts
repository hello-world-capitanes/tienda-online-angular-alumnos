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

  private _products: Product[] = (productsJson as any);
  private _products$: Observable<Product[]>;
  private _category: string|undefined = "fruta";

  constructor(
    private productApiService: ProductApiService,
  ) {
    this._products$ = this.productApiService.getProducts(this._category);
  }

  get products(): Product[] {
    return this._products;
  }

  get products$(): Observable<Product[]> {
    return this._products$;
  }
  set category(category:string|undefined){

    this._category=category;
  }
  get category(): string|undefined{
    return this._category;
  }

}
