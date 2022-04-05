import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, tap } from 'rxjs';
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

  getProducts(): Observable<Product[]> {
    this.http.get(`${this.API_URL}/${this.PRODUCT_URL}`).toPromise().then(res => {
      console.log(res);
    }).catch((error) => {
      console.error(error);
    });
    return this.http.get(`${this.API_URL}/${this.PRODUCT_URL}`).pipe(map((res) => {
      const products = res as ApiProduct[];
      return products?.map(p => new Product(p.title, p.image, p.price, p.description));
    }));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(`${this.API_URL}/${this.PRODUCT_URL}`, {product}).pipe(map((res) => {
      const apiProduct = res as ApiProduct;
      const productDatabase = new Product(product.name, product.image, product.price, product.description);
      productDatabase.id = apiProduct.id?.toString();
      return productDatabase;
    }));
  }

}
0
