import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFilter } from '../../models/productFilter-model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  id!: string|null;
  user = new ProductFilter(1, true, "Banana", "Fruta", "Canarias");

  constructor(
    private userService: ProductFilter,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('categories');
  }

}
