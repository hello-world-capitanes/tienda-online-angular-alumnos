import { UserService } from 'src/app/features/user/services/user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './components/components/user-info/user-info.component';

@NgModule({
  declarations: [
    UserInfoComponent,
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
