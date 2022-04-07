import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, map, Observable, Subject, throwError } from 'rxjs';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/services/user.service';
import { USER_ERRORS } from '../../user/utils/user.errors';
import {
  UserAuth,
  UserFire,
  UserFireCredential,
} from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user!: User;
  user$: Subject<User>;

  constructor(
    private userService: UserService,
    private fireAuth: AngularFireAuth
  ) {
    this.user$ = new Subject();
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

  private findUser(email: string): Observable<User | undefined> {
    if (!email || email.length <= 0) {
      return throwError(() => new Error(USER_ERRORS.database.notFound));
    }
    return this.userService.findUserByEmail(email).pipe((user) => {
      return !!user
        ? user
        : throwError(() => new Error(USER_ERRORS.database.notFound));
    });
  }

  public getUserLogged(): Observable<User> {
    return this.user$.asObservable();
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
          this.findUser(credentials?.user?.email).subscribe((user) => {
            if(!user) {
              return reject(USER_ERRORS.database.notFound);
            }
            this.user$.next(user);
            return resolve(user);
          });
        });
      });
  }

  public async signUp(userAuth: UserAuth): Promise<User> {
    if (!userAuth || !userAuth?.email || !userAuth?.password) {
      return Promise.reject(GENERAL_ERRORS.required);
    }
    return this.fireAuth.createUserWithEmailAndPassword(
      userAuth.email,
      userAuth.password
    ).then(credentials => {
      if (!credentials) {
        return Promise.reject(USER_ERRORS.database.notFound);
      }
      return this.signIn(userAuth);
    });
  }
}
