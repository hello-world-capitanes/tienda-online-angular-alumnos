import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifyNameComponent } from './../modify-info/modify-name/modify-name.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ModifyEmailComponent } from '../modify-info/modify-email/modify-email.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
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
