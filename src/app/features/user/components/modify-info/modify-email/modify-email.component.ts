import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';

@Component({
  selector: 'app-modify-email',
  templateUrl: './modify-email.component.html',
  styleUrls: ['./modify-email.component.scss']
})
export class ModifyEmailComponent implements OnInit {
  modifyInfoForm: FormGroup;
  formValid: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<ModifyEmailComponent>,
    public authService: AuthenticationService
  ) {
    this.modifyInfoForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.authService.changeEmail(this.modifyInfoForm.get('email')?.value);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  isPasswordValid(): boolean {
    return this.authService.passwordCorrect(this.modifyInfoForm.get('password')?.value);
  }
}
