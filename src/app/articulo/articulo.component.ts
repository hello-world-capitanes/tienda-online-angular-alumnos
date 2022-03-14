import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {


  products: Product[] = [
    new Product("Palmerita", "https://pastelerialaoriental.net/delivery/1351-large_default/palmera-de-chocolate.jpg", "1,74€","425g" ),
    new Product("Pan", "https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg", "0,90 €","250g" ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
