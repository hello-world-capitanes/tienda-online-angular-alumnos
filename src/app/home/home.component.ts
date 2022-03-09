import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[]=[
    new Product("Palmera de cacao","assets/images/palmera.jpg","Pieza 200gr",0.9),
    new Product("Barra de pan","assets/images/barrapan.jpg","1 unidad 300gr",0.30),
    new Product("Pata de jamón","assets/images/patajamon.jpg","1 unidad",300),
    new Product("KitKat","assets/images/kitkat.jpg","Pack 3 unidades",3.2),
    new Product("Pintalabios","assets/images/pintalabios.jpg","2 unidades",5.6),
    new Product("Ordenador","assets/images/ordenador.jpg","",1800),
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

