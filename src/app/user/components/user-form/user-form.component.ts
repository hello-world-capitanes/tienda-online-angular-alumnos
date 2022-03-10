import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  createUser!: FormGroup;
  buttonPressed: boolean = false;

  constructor(private formulario: FormBuilder,
              public dialogRef: MatDialogRef<UserFormComponent>,
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

    console.log(this.createUser.get('checkbox'));

    if (this.createUser.valid){
      this.dialogRef.close();
    }
  }

  goBack(){
    const dialogRef2 = this.dialog.open(LoginComponent);
    this.dialogRef.close();

  }
}
