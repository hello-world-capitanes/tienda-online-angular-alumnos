import { AuthComponent } from './../../auth/auth/auth.component';
import { UserInfo } from './../models/user-info';
import { Injectable } from '@angular/core';
import userJson from "../services/user.json";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user!: UserInfo[];

  constructor() {
  }

  public getUser(email:string): UserInfo | undefined {
    return this.user.find(user => user.email === email);
  }
}
