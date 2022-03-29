import { Component, OnInit } from '@angular/core';
import { merge, mergeMap, Subject, tap } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  newProduct$ = new Subject<Product[]>();

  constructor(
    private productService: ProductService,
  ) {
    this.productService.products$.subscribe(productsFromApi => {
      this.products = (!!productsFromApi && productsFromApi.length > 0 ? productsFromApi : []);
    });
    this.productService.products$ = merge(this.newProduct$.asObservable(), this.productService.products$);
  }

  ngOnInit(): void {
  }
  
  addProduct() {
    let product = new Product("Palmerita", "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300", 1.5, "a");
    this.productService.addProduct(product).subscribe(p => {
      this.newProduct$.next([product]); 
    });
  }

}
