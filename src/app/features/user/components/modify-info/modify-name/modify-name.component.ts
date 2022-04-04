import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';

@Component({
  selector: 'app-modify-name',
  templateUrl: './modify-name.component.html',
  styleUrls: ['./modify-name.component.scss'],
})
export class ModifyNameComponent implements OnInit {
  modifyInfoForm: FormGroup;
  formValid: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<ModifyNameComponent>,
    public authService: AuthenticationService
  ) {
    this.modifyInfoForm = new FormGroup({
      name: new FormControl(this.authService.getLoggedUser().name, [Validators.required]),
      lastName1: new FormControl(this.authService.getLoggedUser().lastname1, [Validators.required]),
      lastName2: new FormControl(this.authService.getLoggedUser().lastname2, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.authService.changeFullName(
      this.modifyInfoForm.get('name')?.value,
      this.modifyInfoForm.get('lastName1')?.value,
      this.modifyInfoForm.get('lastName2')?.value
    );
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  isFormInValid(): boolean {
    if (
      this.modifyInfoForm.get('name')?.value !==
        this.authService.getLoggedUser().name ||
      this.modifyInfoForm.get('lastName1')?.value !==
        this.authService.getLoggedUser().lastname1 ||
      this.modifyInfoForm.get('lastName2')?.value !==
        this.authService.getLoggedUser().lastname2
    ) {
      return false;
    }
    return true;
  }
}
