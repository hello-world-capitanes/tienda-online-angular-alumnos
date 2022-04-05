
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/features/user/services/auth-service/auth-service.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  formLogin !: FormGroup;
  isOn: boolean = false;
  buttonPressed: boolean = false;
  buttonCounter: number = 0;

  constructor(private formulario: FormBuilder,
              public dialogRef: MatDialogRef<SignInFormComponent>,
              private authService: AuthServiceService
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
    if (this.authService.credentials.some((element) => (this.formLogin.get('email')?.value) === element.email)) {
      this.isOn = true;
      this.buttonCounter++;

      if (this.buttonCounter >= 2){
        this.buttonPressed = true;
      }

      if (this.formularioLogin.valid){
        let array = [this.formLogin?.value];

        let cliente = this.authService.credentials.find((element) => (this.formLogin.get('email')?.value === element.email));
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
