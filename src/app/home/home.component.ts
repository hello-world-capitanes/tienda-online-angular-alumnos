import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product-detail/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[]=[
    new Product("Palmera de cacao","assets/images/palmera.jpg"),
    new Product("Barra de pan","assets/images/barrapan.jpg"),
    new Product("Pata de jamón","assets/images/patajamon.jpg"),
    new Product("KitKat","assets/images/kitkat.jpg"),
    new Product("Pintalabios","assets/images/pintalabios.jpg"),
    new Product("Ordenador","assets/images/ordenador.jpg"),
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

