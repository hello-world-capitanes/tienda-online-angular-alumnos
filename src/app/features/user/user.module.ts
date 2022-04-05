import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserRoutingModule } from './user.routing';
=======
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
>>>>>>> develop

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
<<<<<<< HEAD
=======
  ],
  exports: [
>>>>>>> develop
  ]
})
export class UserModule { }