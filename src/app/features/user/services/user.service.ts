import usersJson from './user.json'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from './user-api.service';
import { User } from 'src/app/shared/components/sign-in-form/models/email-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

/*   private _user: User[] = (usersJson as any);
  private _user$: Observable<User[]>;

  constructor(
    private userApiService: UserApiService,
  ) {
    this._user$ = this.userApiService.getUsers();
  }

  get users(): User[] {
    return this._user;
  }

  get users$(): Observable<User[]> {
    return this._user$;
  } */

}
