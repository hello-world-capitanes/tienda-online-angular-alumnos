import { UserServiceService } from './../../user/services/user-service.service';
import { Injectable } from '@angular/core';
import authjson from "src/app/features/authentication/data/authentication.json";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private userService: UserServiceService
  ) { }

  public async signIn(email:string, password:string){
    if(authjson.some(user => user.email==email&&user.password==password)){
      return this.userService.obtainUser(email);

    }
    return;
  }
  public async signUp(){

  }
}
