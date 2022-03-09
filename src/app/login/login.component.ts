import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './modelos/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin !: FormGroup;
  isOn: boolean = false;
  mostrarLogeo: boolean = true;
  mostrarVentanaRegistro: boolean = false;

  clientes: Cliente[] = [
        new Cliente("paco","paco@correo.com"),
        new Cliente("garcía", "garcía@correo.com"),
        new Cliente("osman", "osman@correo.com"),
        new Cliente("gregor", "gregor@correo.com")
  ];

  constructor(private formulario: FormBuilder) { }

  ngOnInit(): void {

    let correo: string = "osman@devanddel.com";

    this.formLogin = this.formulario.group({

      email: new FormControl('', [  Validators.required,
                                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                  ]),

      contrasena: new FormControl('', [ Validators.required,
                                        Validators.minLength(8),
      ])
    })

    console.log(this.clientes[3].getCorreo());
  }

  cargarSiguientePantalla(): void{

    if (this.clientes.some((element) => (this.formLogin.get('email')!.value) === element.getCorreo())) {
        this.isOn = true;
    } else {
        this.mostrarLogeo = false;
        this.mostrarVentanaRegistro = true;
    }
  }
}
