import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
    { path: '', component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
