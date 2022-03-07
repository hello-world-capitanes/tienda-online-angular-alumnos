import { Component, OnInit } from '@angular/core';
import { Product } from '../product/modelos/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    new Product("anastasio"),
    new Product("producto2")
  ];

}
