import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    new Product("Palmerita", "https://prod-mercadona.imgix.net/images/af5f40fa72d3697d7075c9549fcbc436.jpg?fit=crop&h=300&w=300","45","48"),
    new Product("pan", "https://prod-mercadona.imgix.net/images/af5f40fa72d3697d7075c9549fcbc436.jpg?fit=crop&h=300&w=300","56","48"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(){

  }

}
