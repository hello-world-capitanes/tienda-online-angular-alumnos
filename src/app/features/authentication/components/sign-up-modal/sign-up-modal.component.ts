import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user.errors';
import { UserAuth } from '../../models/authentication.model';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
})
export class SignUpModalComponent implements OnInit {
  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly USER_ERRORS = USER_ERRORS;

  signUpForm: FormGroup;
  hide = true;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string }
  ) {
    this.signUpForm = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.name.minLength),
          Validators.maxLength(USER_CONTANTS.name.maxLength),
        ],
      ],
      lastname1: [
        null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.lastname.minLength),
          Validators.maxLength(USER_CONTANTS.lastname.maxLength),
        ],
      ],
      lastname2: [
        null,
        [
          Validators.minLength(USER_CONTANTS.lastname.minLength),
          Validators.maxLength(USER_CONTANTS.lastname.maxLength),
        ],
      ],
      email: [this.data.email, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.password.minLength),
          Validators.maxLength(USER_CONTANTS.password.maxLength),
        ],
      ],

      privacy: [false, [Validators.required, Validators.requiredTrue]],
    });

    /*
      Otra forma de poner los datos
      this.formGroup.setValue(this.data);  //Machaca los valores no definidos
      this.formGroup.patchValue(this.data); //Solo cambia los valores definidos
    */
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.dialogRef.close(this.signUpForm?.value);
  }

  login(UserAuth: UserAuth){
    this.authService
    .login(UserAuth)
    .then(() => this.router.navigate(['/home'])
    .catch((e) => console.log(e.message)));
  }

  register(UserAuth:UserAuth){
    this.authService
    .register(UserAuth)
    .then(() => this.router.navigate(['/login'])
    .catch((e) => console.log(e.message)));
  }

  logout(){
    this.authService
    .logout()
    .then(() => this.router.navigate(['/'])
    .catch((e) => console.log(e.message)));
  }
}
