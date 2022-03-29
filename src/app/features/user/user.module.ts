import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
  ]
})
export class UserModule { }