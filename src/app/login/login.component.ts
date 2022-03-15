import { UserFormComponent } from './../user/components/user-form/user-form.component';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from './modelos/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin !: FormGroup;
  isOn: boolean = false;
  buttonPressed: boolean = false;
  buttonCounter: number = 0;

  clientes: Cliente[] = [
        new Cliente("Paco","paco@correo.com"),
        new Cliente("García", "garcía@correo.com"),
        new Cliente("Osman", "osman@correo.com"),
        new Cliente("Gregor", "gregor@correo.com")
  ];

  constructor(private formulario: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>,
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
    if (this.clientes.some((element) => (this.formLogin.get('email')?.value) === element.getCorreo())) {
      this.isOn = true;
      this.buttonCounter++;

      if (this.buttonCounter >= 2){
        this.buttonPressed = true;
      }

      if (this.formularioLogin.valid){
        let array = [this.formLogin?.value];
        let cliente = this.clientes.find((element) => (this.formLogin.get('email')?.value === element.getCorreo()));
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
