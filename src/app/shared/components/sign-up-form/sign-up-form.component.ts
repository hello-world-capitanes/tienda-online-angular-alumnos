import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  createUser!: FormGroup;
  buttonPressed: boolean = false;

  constructor(private formulario: FormBuilder,
              public dialogRef: MatDialogRef<SignUpFormComponent>,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    this.createUser = this.formulario.group ({

      nombre: new FormControl('', [Validators.required]),

      apellidos: new FormControl('', [Validators.required]),

      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

      checkbox: new FormControl('', [Validators.requiredTrue])

    });
  }

  get formularioCreateUser(){
      return this.createUser;
  }

  sendForm(){
    this.buttonPressed = true;

    if (this.createUser.valid){

      this.dialogRef.close({name: this.createUser?.get('nombre')?.value, surname: this.createUser?.get('apellidos')?.value, password: this.createUser?.get('password')?.value});
    }
  }

  goBack(){
    this.dialogRef.close();
  }

}
