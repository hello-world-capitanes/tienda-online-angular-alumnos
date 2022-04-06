import { UserFirestoreService } from './../../../user/services/user-firestore.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { UserService } from 'src/app/features/user/services/user.service';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user.errors';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss'],
})
export class SignInModalComponent implements OnInit, OnDestroy {
  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  showPassword = false;

  userRegistration!: Subscription;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<SignInModalComponent>,
    private authService: AuthenticationService,
    private userFirestore: UserFirestoreService
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl({ value: null, disabled: true }, [
        Validators.required,
        Validators.minLength(USER_CONTANTS.password.minLength),
        Validators.maxLength(USER_CONTANTS.password.maxLength),
      ]),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.userRegistration?.unsubscribe();
  }

  private isUserRegistered(): Observable<boolean> {
    return this.userService.findUserByEmail(this.signInForm?.value?.email).pipe(
      map((user) => {
        return !!user;
      })
    );
  }

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  }

  submitForm() {
    if (this.signInForm.invalid) {
      return;
    }

    if (!this.signInForm.get('password')?.enabled) {
      this.userFirestore
        .findUserByEmail(this.signInForm.get('email')!.value)
        .then(() => (this.signInForm.get('password')?.enable()))
        .catch(() => alert("No se encuentra el usuario"));
      return;
    }

    if (this.signInForm.get('password')?.enabled) {
      alert('Login Completado');
      return this.dialogRef.close(this.signInForm?.value);
    }

    this.userRegistration = this.isUserRegistered().subscribe(
      (isRegistered) => {
        if (!!isRegistered) {
          this.requestPassword();
        } else {
          return this.dialogRef.close(this.signInForm?.value);
        }
      }
    );
  }
}
