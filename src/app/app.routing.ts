import { UserInfoComponent } from './features/user/components/user-info/user-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HomeComponent } from './features/home/home.component';
import { ProductCardComponent } from './features/product/components/product-card/product-card.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { UserModule } from './features/user/user.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductCardComponent },
  { path: 'user/:id', component: UserInfoComponent },
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./features/user/user.module').then((m) => m.UserModule),
  // },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
