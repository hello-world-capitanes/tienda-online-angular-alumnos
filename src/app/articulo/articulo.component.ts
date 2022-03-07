import { Component, OnInit } from '@angular/core';
import { Product } from '../product/modelos/product.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    new Product("anastasio"),
    new Product("producto2")
  ];

}
