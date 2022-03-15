import { Component, Input, OnInit } from '@angular/core';
import { SideBarServiceService } from 'src/app/services/sideBarService/side-bar-service.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input("productCard") product !: Product;

  unidades: number = 0;

  constructor(private sidenav: SideBarServiceService) { }

  ngOnInit(): void {
  }
  incrementClick(){
    this.unidades++;
    this.sidenav.setProduct(this.product)
  }

  decrementClick(){
    this.unidades--;
  }

}
