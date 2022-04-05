import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AppRoutingModule } from 'src/app/app.routing';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserInfoComponent
  ],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UserRoutingModule
  ],
  exports: [
  ]
})
export class UserModule { }
