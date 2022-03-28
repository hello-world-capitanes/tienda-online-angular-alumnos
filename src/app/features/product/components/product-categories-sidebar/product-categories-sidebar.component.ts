import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories-sidebar',
  templateUrl: './product-categories-sidebar.component.html',
  styleUrls: ['./product-categories-sidebar.component.scss']
})
export class ProductCategoriesSidebarComponent implements OnInit {
  
  readonly openedByDefault = true;

  constructor() { }

  ngOnInit(): void {
  }

}
