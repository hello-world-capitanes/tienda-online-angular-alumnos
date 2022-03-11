import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {

  constructor(public formulario:FormBuilder, public dialog: MatDialog) { }

  formLogin!:FormGroup;

  datos=[{usuario:"raul@gmail.com",pass:"12345"}]

  isCorrectEmail:boolean=false;

  aceptar():void{

    this.isCorrectEmail = (this.form.get('emailFormControl')?.value === this.datos[0].usuario);
    if (!this.isCorrectEmail){
      this.dialog.open(RegisterComponent);
    }

  }


  ngOnInit(): void {

    this.formLogin=this.formulario.group({

      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      passFormControl : new FormControl('', [Validators.required, Validators.minLength(8)]),

    })

  }

  get form(){

    return this.formLogin;

  }

  get errorMessageEmail(): string {
    const form: FormControl = (this.formLogin.get('emailFormControl') as FormControl);
    return form.hasError('required') ?
      'Introduce una correo' :
      form.hasError('email') ?
      'Introduce un correo válido':'';
  }

  get errorMessagePass(): string {
    const form: FormControl = (this.formLogin.get('passFormControl') as FormControl);
    return form.hasError('required') ?
      'Introduce una contraseña' :
      form.hasError('minlength') ?
      'Introduce un contraseña de mínimo 8 carácteres':'';
  }

}
