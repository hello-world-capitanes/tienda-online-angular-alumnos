import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
