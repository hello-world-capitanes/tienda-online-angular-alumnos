import productFilterJson from './product-filter.json';
import { ProductFilter } from './../models/productFilter-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  private _products: ProductFilter[] = (productFilterJson as any);
  private _products$: Observable<ProductFilter[]>;

  constructor(
    private productApiService: ProductApiService,
  ) {
    this._products$ = this.productApiService.getProducts();
  }

  get products(): ProductFilter[] {
    return this._products;
  }

  get products$(): Observable<ProductFilter[]> {
    return this._products$;
  }
}
