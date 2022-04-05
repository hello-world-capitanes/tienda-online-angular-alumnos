import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './components/components/user-info/user-info.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
