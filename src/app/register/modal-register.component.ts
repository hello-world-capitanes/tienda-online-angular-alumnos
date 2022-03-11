import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {

  registerForm !: FormGroup;
  activated: boolean = false;
  counter: number = 0;
  more: boolean = false;

  constructor(
    private form: FormBuilder,
    public dialog: MatDialog,
    public ref: MatDialogRef<ModalRegisterComponent>
  ) { }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      name: new FormControl(null, [
        Validators.required,
      ]),
      surname: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        /* Validators.pattern(/^[a-z0-9._%+-A-Z]/), */
      ]),
      checkbox: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

}
