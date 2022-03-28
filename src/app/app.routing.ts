import { CategoriesComponent } from './features/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HomeComponent } from './features/home/home.component';
import { ProductCardComponent } from './features/product/components/product-card/product-card.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductCardComponent },
    { path: 'category', component: CategoriesComponent },


];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
