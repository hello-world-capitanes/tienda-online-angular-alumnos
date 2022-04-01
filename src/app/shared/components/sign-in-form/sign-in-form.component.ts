import { UserService } from './../../../features/user/services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user-messages';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  showPassword = false;

  constructor(
    public dialogRef: MatDialogRef<SignInFormComponent>,
    private userService: UserService
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

  submitForm() {
    if (this.signInForm.invalid){
      return;
    }

    if (this.signInForm.get('password')?.enabled) {
      return this.dialogRef.close(this.signInForm?.value);
    }

    if (this.userService.userExist(this.signInForm.get('email')!.value)) {
      this.requestPassword();
    } else {
      return this.dialogRef.close(this.signInForm?.value);
    }
  }

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  }

}
