import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product/:id', component: ProductDetailComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
