import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError, timeout } from 'rxjs';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { SNACKBAR_MESSAGE_TYPES } from 'src/app/shared/utils/models/snackbar.types';
import { User } from '../../models/user.model';
import { UserFirestoreService } from '../../services/user-firestore.service';
import { USER_MESSAGES } from '../../utils/user-messages';
import { USER_ERRORS } from '../../utils/user.errors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user!: User | null;

  private routerSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private userFirestoreService: UserFirestoreService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe((event) => {
      let email = event?.['email'];
      if (!!email && email.length > 0) {
        this.userFirestoreService.findUserByEmail(email).then((user) => {
          this.user = !!user ? user : null;
        }).catch(error => {
          this.user = null;
        })
      } else {
        this.authService.getUserLogged().pipe(timeout({
          first: 5000,
          with: () => throwError(() => new Error(USER_ERRORS.database.notFound))
        })).subscribe({
          next: (user) => {
            this.user = !!user ? user : null;
          },
          error: (error => {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {
                type: SNACKBAR_MESSAGE_TYPES.error,
                message: error?.message
              }
            }).afterOpened().subscribe(() => {
              this.user = null;
            });
          })
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  onResetPassword(): void {
    this.authService.resetPassword().then(() => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          type: SNACKBAR_MESSAGE_TYPES.correct,
          message: USER_MESSAGES.password.resetPasswordEmailSended,
        }
      })
    }).catch((error) => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          type: SNACKBAR_MESSAGE_TYPES.error,
          message: error?.message
        }
      });
    });
  }
}
