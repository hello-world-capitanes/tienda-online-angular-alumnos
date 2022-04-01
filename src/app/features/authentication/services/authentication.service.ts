import { Observable } from 'rxjs';
import { UserServiceService } from './../../user/services/user-service.service';
import { Injectable } from '@angular/core';
import authjson from "src/app/features/authentication/data/authentication.json";
import { user } from '../../user/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLogged:boolean = false;

  constructor(
    private userService: UserServiceService,
  ) { }

  public async signIn(email:string, password:string){
    if(authjson.some(user => user.email==email&&user.password==password)){
      let user = await this.userService.obtainUser(email);
      this.isLogged = !!user;
      return user;

    }
    return;
  }
  public getUserLogged(): boolean{
    return this.isLogged;
  }
  public async signUp(){

  }
}
