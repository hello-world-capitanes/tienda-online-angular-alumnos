import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(
    private productService: ProductService,
  ) {
    this.productService.products$.subscribe(productsFromApi => {
      this.products = (!!productsFromApi && productsFromApi.length > 0 ? productsFromApi : []);
    })
  }

  ngOnInit(): void {
  }

}
