import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../../user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseauthService {

  constructor(private firebase:AngularFireAuth) {



   }


   public async signUp(email:string): Promise<boolean>{

    return this.firebase.createUserWithEmailAndPassword(email,password)




   }

}
