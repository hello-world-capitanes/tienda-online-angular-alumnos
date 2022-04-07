import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError, timeout } from 'rxjs';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { ErrorSnackbarComponent } from 'src/app/shared/components/error-snackbar/error-snackbar.component';
import { User } from '../../models/user.model';
import { UserFirestoreService } from '../../services/user-firestore.service';
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
            this.snackBar.openFromComponent(ErrorSnackbarComponent, {
              data: {
                error: error?.message
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
}
