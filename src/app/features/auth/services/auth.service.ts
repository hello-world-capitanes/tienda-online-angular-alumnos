import { Injectable } from '@angular/core';
import { authUser } from '../auth/models/authUser';
import authJson from '../data/auth.json';
import { UserInfo } from './../../user/models/user-info';
import { UserService } from './../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _userLogged!: UserInfo | null;
  authUsers: authUser[];

  constructor(private userServ: UserService) {
    this.authUsers = authJson as authUser[];
  }

  get userLogged():UserInfo | null{
    return this._userLogged;
  }

  public isLogged(): boolean {
    return !!this._userLogged;
  }

  public async signIn(email: string, password: string) {
    if (!!this.authUsers.find(
        (authUser) => authUser.email === email && authUser.password === password
      )) {
      const user = this.userServ.getUsers();
      if (!user) {
        alert('No existe el usuario');
      }
/*       this._userLogged = !!user ? user : null; */
      return this.userLogged;
    }
    return null;
  }
}

