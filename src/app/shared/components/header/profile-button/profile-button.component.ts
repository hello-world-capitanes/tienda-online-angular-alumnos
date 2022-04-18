import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { User } from 'src/app/features/user/models/user.model';
import { USER_MESSAGES } from 'src/app/features/user/utils/user-messages';
import { SNACKBAR_MESSAGE_TYPES } from 'src/app/shared/utils/models/snackbar.types';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  @Input('userLogged') user!: User | null;

  constructor(
    private authService: AuthenticationService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  onSignOut(): void {
    if (!this.user) {
      return;
    }

    this.authService.signOut().then(() => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          type: SNACKBAR_MESSAGE_TYPES.info,
          message: USER_MESSAGES.auth.signOut
        }
      }).afterOpened().subscribe(() => {
        this.user = null;
      });
    }).catch((error) => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          type: SNACKBAR_MESSAGE_TYPES.error,
          message: error?.message
        }
      });
    })
  }

}
