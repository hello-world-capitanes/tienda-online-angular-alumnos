import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ErrorSnackbarComponent } from 'src/app/shared/components/error-snackbar/error-snackbar.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productSub: Subscription;
  products!: Product[];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
  ) {
    this.productSub = this.productService.products$.subscribe({
      next: (productsFromApi) => {
        this.products = (!!productsFromApi && productsFromApi.length > 0 ? productsFromApi : []);
      },
      error: (error) => {
        this.snackBar.openFromComponent(ErrorSnackbarComponent, {
          data: {
            error: error?.message
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

}
