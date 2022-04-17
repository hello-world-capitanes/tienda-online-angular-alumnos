import { Injectable } from '@angular/core';
import { User } from '../../models/user.module';
import usersJson from '../../data/authentication.json';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserFirestoreService } from '../user-firestore.service';


interface userAuthentication {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
  private _user!: User;
  private _encontrado: boolean = false;
  private credenciales: userAuthentication[] = usersJson.Credentials as userAuthentication[];

  constructor(private auth: AngularFireAuth) {
  }

  sigIn(email: string, password: string){

    // Usando Firebase

    // Usando JSON

/*     if (this.credenciales.some( (elemento) => elemento.email == email && elemento.password == password)){
/*       this._user != this._profileService.getUser('email');
    } */
  }

  public setNewCredentials(email: string, password: string ){

      // Usando Firebase



      // Usando JSON

      /* let credential = {email: email, password: password} as userAuthentication;
      this.credenciales.push(credential); */
  }

  public getUserLogged(): boolean{
    return (this._user ? true: false);
  }

  public get credentials(): userAuthentication[]{
    return this.credenciales;
  }

}

