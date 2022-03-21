import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { LoginComponent } from 'src/app/login/login.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ProductCardComponent } from './core/product/components/product-card/product-card.component';
import { ProductListComponent } from './core/product/components/product-list/product-list.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'articulo', component: ArticuloComponent},
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductCardComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
