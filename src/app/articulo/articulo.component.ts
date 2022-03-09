import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {


  products: Product[] = [
    new Product("Palmerita", "https://prod-mercadona.imgix.net/images/af5f40fa72d3697d7075c9549fcbc436.jpg?fit=crop&h=300&w=300"),
    new Product("pan", "https://prod-mercadona.imgix.net/images/af5f40fa72d3697d7075c9549fcbc436.jpg?fit=crop&h=300&w=300"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
