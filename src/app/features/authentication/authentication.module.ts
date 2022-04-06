import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';
import { StrengthBarComponent } from './components/sign-up-modal/strength-bar/strength-bar.component';

@NgModule({
  declarations: [
    SignInModalComponent,
    SignUpModalComponent,
    StrengthBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SignInModalComponent],
})
export class AuthenticationModule {}
