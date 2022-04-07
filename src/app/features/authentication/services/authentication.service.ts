import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { User } from '../../user/models/user.model';
import { UserFirestoreService } from '../../user/services/user-firestore.service';
import { USER_ERRORS } from '../../user/utils/user.errors';
import { UserAuth } from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _user$: ReplaySubject<User>;

  constructor(
    private userFirestoreService: UserFirestoreService,
    private fireAuth: AngularFireAuth
  ) {
    this._user$ = new ReplaySubject();
    /*     this.fireAuth.authState.subscribe((user) => {
      if (!user || !user?.email || user?.email?.length <= 0) {
        return throwError(() => new Error(USER_ERRORS.database.notFound));
      }
      if (!user) {

      }
      this.user$.next(user);
      return this.user$.asObservable();
    }); */
  }

  public getUserLogged(): Observable<User> {
    return this._user$.asObservable();
  }

  public async signIn(userAuth: UserAuth): Promise<User> {
    if (!userAuth || !userAuth?.email || userAuth.email.length <= 0) {
      return Promise.reject(USER_ERRORS.email.notProvided);
    }
    if (!userAuth || !userAuth?.password || userAuth.password.length <= 0) {
      return Promise.reject(USER_ERRORS.password.notProvided);
    }
    return this.fireAuth
      .signInWithEmailAndPassword(userAuth.email, userAuth.password)
      .then((credentials) => {
        return new Promise((resolve, reject) => {
          if (!credentials || !credentials?.user || !credentials.user?.email) {
            return reject(USER_ERRORS.database.notFound);
          }
          return this.userFirestoreService
            .findUserByEmail(credentials?.user?.email)
            .then((user) => {
              if (!user) {
                return reject(USER_ERRORS.database.notFound);
              }
              this._user$.next(user);
              return resolve(user);
            });
        });
      });
  }

  public async signUp(userAuth: UserAuth): Promise<string | null> {
    if (!userAuth || !userAuth?.email || !userAuth?.password) {
      return Promise.reject(GENERAL_ERRORS.required);
    }
    return this.fireAuth
      .createUserWithEmailAndPassword(userAuth.email, userAuth.password)
      .then((credentials) => {
        if (!credentials) {
          return Promise.reject(USER_ERRORS.database.notFound);
        }
        return !!credentials.user?.uid && credentials.user?.uid.length >= 0
          ? credentials.user?.uid
          : null;
      });
  }

  public async resetPassword(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._user$.subscribe({
        next: (user) => {
          if (
            !user ||
            !user?.active ||
            !user?.email ||
            user.email.length <= 0
          ) {
            return reject(USER_ERRORS.database.notFound);
          }
          return resolve(this.fireAuth.sendPasswordResetEmail(user?.email));
        },
        error: (error) => {
          reject(USER_ERRORS.database.notFound);
        },
      });
    });
  }
}
