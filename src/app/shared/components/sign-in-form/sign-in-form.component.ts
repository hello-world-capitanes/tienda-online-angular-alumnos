
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { USER_CONTANTS } from 'src/app/features/user/utils/user-constants';
import { USER_ERRORS } from 'src/app/features/user/utils/user-messages';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  /* readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  showPassword = false;

  constructor(
    public dialogRef: MatDialogRef<SignInFormComponent>,
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
    const users = ['capitan@hw.com', 'fernando@hw.com'];

    return users.includes(this.signInForm?.value?.email);
  }

  private requestPassword() {
    this.signInForm.get('password')?.enable();
    this.signInForm.get('password')?.markAsUntouched();
  } */


  formLogin !: FormGroup;
  isOn: boolean = false;
  buttonPressed: boolean = false;
  buttonCounter: number = 0;

  clientes: string[] = ["paco@correo.com", "garcía@correo.com","osman@correo.com", "gregor@correo.com"];

  constructor(private formulario: FormBuilder,
              public dialogRef: MatDialogRef<SignInFormComponent>,
              ) {}

  ngOnInit(): void {

    this.formLogin = this.formulario.group({

      email: new FormControl('', [  Validators.required,
                                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                ]),

      password: new FormControl('', [Validators.required])
    })
  }

  get formularioLogin(){
    return this.formLogin;
  }


  continueForm(): void{
    if (this.clientes.some((element) => (this.formLogin.get('email')?.value) === element)) {
      this.isOn = true;
      this.buttonCounter++;

      if (this.buttonCounter >= 2){
        this.buttonPressed = true;
      }

      if (this.formularioLogin.valid){
        let array = [this.formLogin?.value];

        let cliente = this.clientes.find((element) => (this.formLogin.get('email')?.value === element));
        array.push(cliente);

        this.dialogRef.close(array);
      }

    } else {

      if (this.formLogin.get('email')?.valid){
        let array = [this.formLogin?.value, ""];
        this.dialogRef.close(array);
      }
    }
  }

   cancelForm(): void {
    this.dialogRef.close();
  }

}
