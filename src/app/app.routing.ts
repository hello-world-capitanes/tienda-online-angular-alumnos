import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HabitualesComponent } from './features/habituales/habituales.component';
import { HomeComponent } from './features/home/home.component';
import { ProductCardComponent } from './features/product/components/product-card/product-card.component';
import { ProductCategoriesSidebarComponent } from './features/product/components/product-categories-sidebar/product-categories-sidebar.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductCardComponent },
  { path: 'category', component: ProductCategoriesSidebarComponent },
  { path: 'habituales', component: HabitualesComponent },
  {
    path: 'user', loadChildren: () => import(
      './features/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'filter', loadChildren: () => import(
      './product/product.module').then(m => m.ProductModule)
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
