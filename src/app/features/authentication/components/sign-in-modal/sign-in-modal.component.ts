import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { UserFirestoreService } from 'src/app/features/user/services/user-firestore.service';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user.errors';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss'],
})
export class SignInModalComponent implements OnInit {
  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  showPassword = false;

  constructor(
    private userFirestoreService: UserFirestoreService,
    public dialogRef: MatDialogRef<SignInModalComponent>
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

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  }

  submitForm() {
    if (this.signInForm.invalid) {
      return;
    }

    if (this.signInForm.get('password')?.enabled) {
      return this.dialogRef.close(this.signInForm?.value);
    }

    this.userFirestoreService
      .findUserByEmail(this.signInForm?.value?.email)
      .then((user) => {
        if (!!user) {
          this.requestPassword();
        } else {
          return this.dialogRef.close(this.signInForm?.value);
        }
      });
  }
}
