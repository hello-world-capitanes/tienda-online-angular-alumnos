
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user-messages';
import { ModalRegisterComponent } from 'src/app/register/modal-register.component';
import { User } from './models/email-model';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  users: User[] = [
    new User("Mónica", "monica@gmail.com"),
    new User("Roberto", "roberto@gmail.com"),
    new User("Marta", "marta@gmail.com"),
  ]
  readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  activated: boolean = false;
  counter: number = 0;
  more: boolean = false;
  showPassword = false;

  constructor(
    public dialogRef: MatDialogRef<SignInFormComponent>,
    public dialog: MatDialog,
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

    if (this.isUserRegistered()) {
      this.requestPassword();
    } else {
      return this.dialogRef.close(this.signInForm?.value);
    }
  }

  private isUserRegistered() {
    const users = ['monica@gmail.com','roberto@gmail.com','marta@gmail.com'];

    return users.includes(this.signInForm?.value?.email);
  }

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  }

  addPass(): void {
    const users = ['capitan@hw.com', 'fernando@hw.com', 'monica@gmail.com'];
    if (this.users.some((element) => (this.signInForm.get('email')?.value) === element.email)) {
      this.activated = true;
      this.counter++;
      if (this.counter >= 2) {
        this.more = true;
      }

      if (this.signInForm.valid) {
        this.dialogRef.close(true);
      }

    } else {

      if (this.signInForm.get('email')?.valid) {
        this.dialogRef.close();
        const dialogRef2 = this.dialog.open(ModalRegisterComponent);
      }
    }
  }

}
