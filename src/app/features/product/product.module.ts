import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD:src/app/core/product/product.module.ts
=======
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    
>>>>>>> develop:src/app/features/product/product.module.ts
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
