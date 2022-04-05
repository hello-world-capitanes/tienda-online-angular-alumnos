import { ProductFilter } from './../models/productFilter-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from '../models/product.model';

export interface ApiProduct {
  id: number;
  name: string;
  category: string;
  marca: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ApiService {

  private readonly PRODUCT_URL = "filter/";

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

/*   getProducts(): Observable<ProductFilter[]> {
    return this.http.get(`${this.API_URL}/${this.PRODUCT_URL}`).pipe(map((res) => {
      const products = res as ApiProduct[];
      return products?.map(p => new ProductFilter(p.name, p.category, p.marca));
    }));
  } */

}
