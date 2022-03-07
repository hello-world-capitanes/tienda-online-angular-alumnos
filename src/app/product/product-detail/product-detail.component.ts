import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input("productCard") product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
