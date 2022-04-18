import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { UserAuth } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private auth: Auth,
  ) {}

/*    public async signUp(email: string, password:string):Promise<boolean>{
    return this.userService.findUs
  }  */
  login({email, password}: UserAuth){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({email, password}: UserAuth){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

}
