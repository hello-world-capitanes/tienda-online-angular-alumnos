import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserService } from 'src/app/features/user/services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,

    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
  ]
})
export class UserModule { }
