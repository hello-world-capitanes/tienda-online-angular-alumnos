import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './models/email-model';
import { ModalRegisterComponent } from '../register/modal-register.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})

export class ModalLoginComponent implements OnInit {

  loginForm !: FormGroup;
  activated: boolean = false;
  counter: number = 0;
  more: boolean = false;

  users: User[] = [
    new User("Mónica", "monica@gmail.com"),
    new User("Roberto", "roberto@gmail.com"),
    new User("Marta", "marta@gmail.com"),
  ]

  constructor(
    private form: FormBuilder,
    public dialog: MatDialog,
    public ref: MatDialogRef<ModalLoginComponent>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        /* Validators.pattern(/^[a-z0-9._%+-A-Z]/), */
      ]),
    })
  }

  addPass(): void {
    if (this.users.some((element) => (this.loginForm.get('email')?.value) === element.email)) {
      this.activated = true;
      this.counter++;
      if (this.counter >= 2) {
        this.more = true;
      }

      if (this.loginForm.valid) {
        this.ref.close(true);
      }

    } else {

      if (this.loginForm.get('email')?.valid) {
        this.ref.close();
        const dialogRef2 = this.dialog.open(ModalRegisterComponent);
      }
    }
  }
}




