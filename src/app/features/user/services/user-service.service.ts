import { Injectable } from '@angular/core';
import userjson from "src/app/features/user/data/users.json";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  public async obtainUser(email:string){
    const userObtained = userjson.find(user => user.email==email);
    if(userObtained){
      return userObtained;
    }
    return;

  }
}
