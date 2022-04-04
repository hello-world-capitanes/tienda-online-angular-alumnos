import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifyEmailComponent } from '../modify-info/modify-email/modify-email.component';
import { ModifyNameComponent } from '../modify-info/modify-name/modify-name.component';
import { AuthenticationService } from './../../../../core/services/Authentication/authentication.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user!: User;

  constructor(
    private matDialog: MatDialog,
    public authService: AuthenticationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
  }

  userFullName(): string {
    return (
      (!!this.authService.getLoggedUser().name
        ? this.authService.getLoggedUser().name
        : '') +
      ' ' +
      (!!this.authService.getLoggedUser().lastname1
        ? this.authService.getLoggedUser().lastname1
        : '') +
      ' ' +
      (!!this.authService.getLoggedUser().lastname2
        ? this.authService.getLoggedUser().lastname2
        : '')
    );
  }

  editName(): void {
    const dialogRef = this.matDialog.open(ModifyNameComponent, {
      width: '350px',
    });
  }

  editEmail(): void {
    const dialogRef = this.matDialog.open(ModifyEmailComponent, {
      width: '350px',
    });
  }
}
