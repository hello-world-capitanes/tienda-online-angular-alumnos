import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    new Product("Palmerita", "https://s3-eu-west-1.amazonaws.com/carritus.com/images_pms/70/59391570.jpg", "Peso 452g", "Precio 1.75€"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
