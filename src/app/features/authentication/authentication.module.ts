import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';
import { AuthenticationApiInterceptor } from 'src/app/core/interceptors/authentication-api.interceptor';
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
  providers: [
    AuthenticationGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthenticationApiInterceptor,
      multi : true
   }
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,

    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SignInModalComponent],
})
export class AuthenticationModule {}
