import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from '../models/product.model';

export interface ApiProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  category?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ApiService {

  private readonly PRODUCT_URL = "products/";

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.API_URL}/${this.PRODUCT_URL}`).pipe(map((res) => {
      const products = res as ApiProduct[];
      return products?.map(p => new Product(p.id, p.name, p.image, p.price, p.description));
    }));
  }

}
