import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignInModalComponent } from 'src/app/features/authentication/components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from 'src/app/features/authentication/components/sign-up-modal/sign-up-modal.component';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { ErrorSnackbarComponent } from '../../error-snackbar/error-snackbar.component';

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
          .then((credentials) => {
            if (!credentials) {
              alert('No credentials');
            }
            this.router.navigate(['user', 1]);
          })
          .catch((error) => {
            this.snackBar.openFromComponent(ErrorSnackbarComponent, {
              data: {
                error: error?.message,
              },
            });
          });
      }
    });
  }

  private openSignUpForm(user: User) {
    const dialogRef = this.matDialog.open(SignUpModalComponent, {
      data: { email: user.email },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((userSignUp) => {
      if (!userSignUp) {
        return;
      }

      this.authService.signUp(userSignUp).then((userCredential) => {
        if (!userCredential) {
          return;
        }
      });
    });
  }
}
