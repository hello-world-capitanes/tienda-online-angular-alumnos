import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';

@Component({
  selector: 'app-modify-name',
  templateUrl: './modify-name.component.html',
  styleUrls: ['./modify-name.component.scss']
})
export class ModifyNameComponent implements OnInit {
  modifyInfoForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModifyNameComponent>,
    public authService: AuthenticationService
  ) {
    this.modifyInfoForm = new FormGroup({
      name: new FormControl('name', [Validators.required]),
      lastName1: new FormControl('firstname1'),
      lastName2: new FormControl('firstname2'),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log("a");

  }
}
