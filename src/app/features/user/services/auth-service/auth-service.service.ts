import { Injectable } from '@angular/core';
import { User } from '../../models/user.module';
import { ProfileServiceService } from '../profile-service/profile-service.service';
import usersJson from '../../data/authentication.json';


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
  private _profileService: ProfileServiceService;

  constructor(profileService: ProfileServiceService) {
    this._profileService = profileService;
  }

  sigIn(email: string, password: string){

    if (this.credenciales.some( (elemento) => elemento.email == email && elemento.password == password)){
      this._user != this._profileService.getUser('email');
    }
  }

  public setNewCredentials(email: string, password: string ){
      let credential = {email: email, password: password} as userAuthentication;
      this.credenciales.push(credential);
  }

  public getUserLogged(): boolean{
    return (this._user ? true: false);
  }

  public get credentials(): userAuthentication[]{
    return this.credenciales;
  }
}

