import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserService } from 'src/app/features/user/services/user.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
  ]
})
export class UserModule { }
