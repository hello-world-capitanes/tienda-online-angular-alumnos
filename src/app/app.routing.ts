import { LoginComponent } from 'src/app/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ArticuloComponent } from './articulo/articulo.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'articulo', component: ArticuloComponent},
    { path: 'login', component: LoginComponent},
    { path: 'createAccount', component: CreateAccountComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
