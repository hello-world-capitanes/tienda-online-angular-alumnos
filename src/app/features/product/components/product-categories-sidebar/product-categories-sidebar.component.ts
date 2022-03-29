import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Category } from './../../models/category.model';

@Component({
  selector: 'app-product-categories-sidebar',
  templateUrl: './product-categories-sidebar.component.html',
  styleUrls: ['./product-categories-sidebar.component.scss']
})
export class ProductCategoriesSidebarComponent implements OnInit {

  readonly openedByDefault = true;

  products!: Product[];
  categories!: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {
    this.productService.products$.subscribe(productsFromApi => {
      this.products = (!!productsFromApi && productsFromApi.length > 0 ? productsFromApi : []);
    })

    this.categoryService.categories$.subscribe(categoriesFromApi => {
      this.categories = (!!categoriesFromApi && categoriesFromApi.length > 0 ? categoriesFromApi : []);
    })
  }

  ngOnInit(): void {
  }

}
