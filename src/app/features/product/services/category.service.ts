import productsJson from './products.json';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductApiService } from './product-api.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryApiService } from './category-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories: Category[] = [];
  private _categories$: Observable<Category[]>;

  constructor(
    private categoryApiService: CategoryApiService,
  ) {
    this._categories$ = this.categoryApiService.getCategories();
  }

  get products(): Category[] {
    return this._categories;
  }

  get products$(): Observable<Category[]> {
    return this._categories$;
  }

}
