import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public formulario:FormBuilder) { }

  formRegister!:FormGroup;

  ngOnInit(): void {

    this.formRegister=this.formulario.group({

      passFormControl : new FormControl('', [Validators.required, Validators.minLength(8)]),
      nombreFormControl: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
      apellidoFormControl: new FormControl('', [Validators.minLength(5),Validators.maxLength(15)]),

    })

  }

  get form(){

    return this.formRegister;

  }

  get errorMessageNombre(): string {
    const form: FormControl = (this.formRegister.get('nombreFormControl') as FormControl);
    return form.hasError('required') ?
      'Introduce un nombre' :
      form.hasError('maxlength') ?
      'Introduce un nombre de máximo 15 carácteres' :
      form.hasError('minlength') ?
      'Introduce un nombre de mínimo 3 carácteres':'';
 }

 get errorMessageApellidos(): string {
  const form: FormControl = (this.formRegister.get('apellidoFormControl') as FormControl);
  return form.hasError('maxlength') ?
    'Introduce un apellido de máximo 15 carácteres' :
    form.hasError('minlength') ?
    'Introduce un apellido de mínimo 5 carácteres':'';
}

get errorMessagePass(): string {
  const form: FormControl = (this.formRegister.get('passFormControl') as FormControl);
  return form.hasError('required') ?
    'Introduce una contraseña' :
    form.hasError('minlength') ?
    'Introduce un contraseña de mínimo 8 carácteres':'';
}

}
