import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignInModalComponent } from 'src/app/features/authentication/components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from 'src/app/features/authentication/components/sign-up-modal/sign-up-modal.component';
import { UserAuth } from 'src/app/features/authentication/models/authentication.model';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { User } from 'src/app/features/user/models/user.model';
import { UserFirestoreService } from 'src/app/features/user/services/user-firestore.service';
import { USER_ERRORS } from 'src/app/features/user/utils/user.errors';
import { SNACKBAR_MESSAGE_TYPES } from 'src/app/shared/utils/models/snackbar.types';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {
  
  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private userFirestoreService: UserFirestoreService,
  ) {}

  ngOnInit(): void {}

  openSignInForm() {
    const dialogRef = this.matDialog.open(SignInModalComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      if (!result?.password) {
        this.openSignUpForm(result as User);
      }

      if (!!result?.email && !!result?.password) {
        this.authService
          .signIn(result)
          .then((user) => {
            if (!user) {
              alert('No credentials');
            }
            return this.router.navigate(['user']);
          })
          .catch((error) => {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {
                type: SNACKBAR_MESSAGE_TYPES.error,
                message: error?.message
              },
            });
          });
      }
    });
  }

  private openSignUpForm(user: User): void {
    const dialogRef = this.matDialog.open(SignUpModalComponent, {
      data: { email: user.email },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((userSignUp) => {
      const userAuth = new UserAuth(userSignUp?.email, userSignUp?.password);
      if (!userSignUp || !userAuth) {
        return;
      }

      this.authService.signUp(userAuth).then((userId) => {
        if (!userId || userId.length <= 0) {
          return Promise.reject(USER_ERRORS.database.notFound);
        }
        const userToStore = {... userSignUp, id: userId} as User;
        if (!userToStore) {
          return Promise.reject(USER_ERRORS.database.notFound);
        }
        return this.userFirestoreService.signUp(userToStore).then(userRegistered => {
          if (!userRegistered || !userRegistered?.id || userRegistered.id.length <= 0) {
            return Promise.reject(USER_ERRORS.database.notFound);
          }
          return this.authService.signIn(userAuth).then(userLogged => {
            if (!userLogged || !userLogged?.id || userLogged.id.length <= 0) {
              return Promise.reject(USER_ERRORS.database.notFound);
            }
            return this.router.navigate(['user']);
          })
        });
      });
    });
  }
}
