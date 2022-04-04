import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
    { path: '', component: UserInfoComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule { }
