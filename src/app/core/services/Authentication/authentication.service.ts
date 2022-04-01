import { UserService } from './../../../features/user/services/user.service';
import { Injectable } from '@angular/core';
import authenticationJson from './data/authentication.json';
import { Authentication } from './models/authentication.model';
import { User } from 'src/app/features/user/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _authenticationUsers: Authentication[];
  private _isLogged: boolean = false;
  private userLogged!: User;

  constructor(private userService: UserService) {
    this._authenticationUsers = authenticationJson as Authentication[];
  }

  logIn(email: string, password: string): boolean{
    if(!this.userService.userExist(email))
    {
      return false;
    }

    let authenticationUser = this._authenticationUsers.find(
      (userAuthentication) => userAuthentication.email == email && userAuthentication.password == password
    )

    if(!authenticationUser)
    {
      return false;
    }

    this._isLogged = true;
    this.userLogged = this.userService.getUser(email);
    return true;
  }

  isLogged(): boolean{
    return this._isLogged;
  }

  getLoggedUser(): User{
    return this.userLogged;
  }

}
