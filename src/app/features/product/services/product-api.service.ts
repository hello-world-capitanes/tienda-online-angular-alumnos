import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from '../models/product.model';

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ApiService {

  private readonly PRODUCT_URL = "products";
  private filtro = "Filtered?category=";
  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getProducts(category:string|undefined): Observable<Product[]> {
    if(!!category){
      return this.http.get(`${this.API_URL}/${this.PRODUCT_URL}${this.filtro}${category}`).pipe(map((res) => {
        const products = res as ApiProduct[];
        return products?.map(p => new Product(p.title, p.image, p.price, p.description));
      }));
    }
    return this.http.get(`${this.API_URL}/${this.PRODUCT_URL}`).pipe(map((res) => {
      const products = res as ApiProduct[];
      return products?.map(p => new Product(p.title, p.image, p.price, p.description));
    }));
  }

}
