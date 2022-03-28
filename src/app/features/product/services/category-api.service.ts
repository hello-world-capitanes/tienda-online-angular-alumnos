import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export interface ApiCategory {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends ApiService {

  private readonly CATEGORY_URL = "categories";

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get(`${this.API_URL}/${this.CATEGORY_URL}`).pipe(map((res) => {
      const categories = res as ApiCategory[];
      return categories?.map(c => new Category(c.id, c.name, c.description));
    }));
  }

}
