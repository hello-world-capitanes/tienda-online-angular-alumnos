import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product.model';
import { ProductService } from '../product/services/product.service';


@Component({
  selector: 'app-habituales',
  templateUrl: './habituales.component.html',
  styleUrls: ['./habituales.component.scss']
})
export class HabitualesComponent implements OnInit {
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
