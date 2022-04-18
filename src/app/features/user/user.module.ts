import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule,
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
