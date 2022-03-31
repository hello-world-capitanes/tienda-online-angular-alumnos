import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductCategoriesSidebarComponent } from './components/product-categories-sidebar/product-categories-sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductCategoriesSidebarComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],

  exports: [
    ProductCardComponent,
    ProductListComponent,
    ProductCategoriesSidebarComponent
  ]
})
export class ProductModule { }
