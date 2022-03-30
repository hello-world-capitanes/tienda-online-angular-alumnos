import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from 'src/app/features/user/components/user-info/user-info.component';

const routes: Routes = [
  {path:'', component: UserInfoComponent},
  {path:':id', component: UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
