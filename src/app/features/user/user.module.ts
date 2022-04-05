import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ModifyEmailComponent } from './components/modify-info/modify-email/modify-email.component';
import { ModifyNameComponent } from './components/modify-info/modify-name/modify-name.component';
import { ModifyPasswordComponent } from './components/modify-info/modify-password/modify-password.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [
    UserInfoComponent,
    UserProfileComponent,
    ModifyNameComponent,
    ModifyEmailComponent,
    ModifyPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserModule { }
