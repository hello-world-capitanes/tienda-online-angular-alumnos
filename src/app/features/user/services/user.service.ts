import { Injectable } from '@angular/core';
import usersJson from '../data/users.json';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[];

  constructor() {
    this.users = usersJson as unknown as User[];
  }

  userExist(email: string): boolean
  {
    let user = this.users.find((user) => user.email == email);
    return !!user ? true : false;
  }

  getUserId(email: string): string {
    let user = this.users.find((user) => user.email == email);
    return !!user ? user.id : '-1';
  }

  getUser(email: string): User
  {
    return this.users.find((user) => user.email == email)!;
  }
}
