import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { SNACKBAR_MESSAGE_TYPES } from 'src/app/shared/utils/models/snackbar.types';
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
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: {
            type: SNACKBAR_MESSAGE_TYPES.error,
            message: error?.message
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
