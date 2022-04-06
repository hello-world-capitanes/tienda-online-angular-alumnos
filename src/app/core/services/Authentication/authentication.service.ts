import { UserService } from './../../../features/user/services/user.service';
import { Injectable } from '@angular/core';
import authenticationJson from './data/authentication.json';
import { Authentication } from './models/authentication.model';
import { User } from 'src/app/features/user/models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _authenticationUsers: Authentication[];
  private _isLogged: boolean = false;
  private userLogged!: User;
  private userLoggedAuthentication!: Authentication;

  constructor(
    private userService: UserService,
    private fireAuth: AngularFireAuth
  ) {
    this._authenticationUsers = authenticationJson as Authentication[];
  }

  logIn({ email, password }: Authentication): Promise<boolean> {
    return this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => true
    ).catch(error => false);
  }

  register({ email, password }: Authentication) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.signOut();
  }
  // logIn(email: string, password: string): boolean {
  //   if (!this.userService.userExist(email)) {
  //     return false;
  //   }

  //   let authenticationUser = this._authenticationUsers.find(
  //     (userAuthentication) =>
  //       userAuthentication.email == email &&
  //       userAuthentication.password == password
  //   );

  //   if (!authenticationUser) {
  //     return false;
  //   }

  //   this._isLogged = true;
  //   this.userLogged = this.userService.getUser(email);
  //   this.userLoggedAuthentication = authenticationUser;
  //   return true;
  // }

  isLogged(): boolean {
    return this._isLogged;
  }

  getLoggedUser(): User {
    return this.userLogged;
  }

  changeFullName(name: string, lastname1: string, lastname2: string): void {
    this.userLogged.name = name;
    this.userLogged.lastname1 = lastname1;
    this.userLogged.lastname2 = lastname2;
    //TODO Llamada al dao para actualizar el registro
  }

  changeEmail(email: string): void {
    this.userLogged.email = email;
    this.userLoggedAuthentication.email = email;
  }

  passwordCorrect(password: string): boolean {
    return this.userLoggedAuthentication.password === password ? true : false;
  }
}
