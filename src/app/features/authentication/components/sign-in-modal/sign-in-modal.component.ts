
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable, Subscription } from 'rxjs';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { UserService } from 'src/app/features/user/services/user.service';
import { USER_ERRORS } from 'src/app/features/user/utils/user.errors';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
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
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(
        {value: null, disabled: true},
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.password.minLength),
          Validators.maxLength(USER_CONTANTS.password.maxLength)
        ]
      ),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.userRegistration?.unsubscribe();
  }

  private isUserRegistered(): Observable<boolean> {
    return this.userService.findUserByEmail(this.signInForm?.value?.email)
      .pipe(map(user => {
        return !!user;
      }));
  }

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  }

  submitForm() {
    if (this.signInForm.invalid){
      return;
    }

    if (this.signInForm.get('password')?.enabled) {
      return this.dialogRef.close(this.signInForm?.value);
    }

    this.userRegistration = this.isUserRegistered().subscribe((isRegistered => {
      if (!!isRegistered) {
        this.requestPassword();
      } else {
        return this.dialogRef.close(this.signInForm?.value);
      }
    }));
  }

}