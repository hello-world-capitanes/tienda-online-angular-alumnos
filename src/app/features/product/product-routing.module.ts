import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

const routes: Routes = [
  {path:'', component: ProductFilterComponent},
  {path:':id', component: ProductFilterComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
