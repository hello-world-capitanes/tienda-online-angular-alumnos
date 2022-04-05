import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFilter } from '../models/user.filter';
import { User } from '../models/user.model';
import { USER_ERRORS } from '../utils/user.errors';
import usersJson from './users.json';

@Injectable({
  providedIn: "root"
})
export class UserService {

  private _users!: User[];

  constructor() {
    this._users = (usersJson as any) as User[];
  }

  get users(): User[] {
    return this._users;
  }

  getUsers(filter?: UserFilter): Observable<User[]> {
    return new Observable((subscriber) => {
      if (!filter) {
        return subscriber.next(this._users);
      }

      return subscriber.next(this._users?.filter(user => {
        if (filter?.active !== undefined && filter?.active !== null) {
          return user.active === filter.active;
        }
        if (filter?.name !== undefined && filter?.name !== null && filter?.name.length >= 0) {
          return user.name.startsWith(filter.name.trim());
        }
        return !!user;
      }));
    });
  }

  findUserById(id: string): Observable<User | undefined> {
    if (!id || id.length <= 0) {
      throw new Error(USER_ERRORS.email.notProvided);
    }
    //this._users?.find(user => user.id === id);
    return new Observable((subscriber) => {
      subscriber.next(this._users?.find(user => user.id == id));
    });
  }

  findUserByEmail(email: string): Observable<User | undefined> {
    if (!email || email.length <= 0) {
      throw new Error(USER_ERRORS.email.notProvided);
    }
    //return this._users?.find(user => user.email === email);
    return new Observable((subscriber) => {
      subscriber.next(this._users?.find(user => user.email === email));
    });
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
