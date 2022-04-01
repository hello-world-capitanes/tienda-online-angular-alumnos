import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product.model';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  products!: Product[];

  constructor(
    private productService: ProductService,
  ) {
    this.productService.category?("fruta"):
    this.productService.products$.subscribe(productsFromApi => {
      this.products = (!!productsFromApi && productsFromApi.length > 0 ? productsFromApi : []);
    })
  }

  ngOnInit(): void {
  }

}
