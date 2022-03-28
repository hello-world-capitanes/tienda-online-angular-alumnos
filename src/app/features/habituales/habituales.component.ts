import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-habituales',
  templateUrl: './habituales.component.html',
  styleUrls: ['./habituales.component.scss']
})
export class HabitualesComponent implements OnInit {
  products!: Product[];

  constructor() {}

  ngOnInit(): void {
  }

}
