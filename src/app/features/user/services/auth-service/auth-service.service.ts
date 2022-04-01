import { Injectable } from '@angular/core';
import { User } from '../../models/user.module';
import { ProfileServiceService } from '../profile-service/profile-service.service';
import usersJson from './authentication.json';

@Injectable({
  providedIn: 'root'
})

interface userAuthentication {
  email: string;
  password: string;
}


export class AuthServiceService {
  private _user!: User;
  private _encontrado: boolean = false;
  private credenciales: userAuthentication[];
  private _profileService: ProfileServiceService;

  constructor(profileService: ProfileServiceService) {

    this._profileService = profileService;
    this.credenciales = (usersJson.Credentials as userAuthentication[]);
  }

  sigIn(email: string, password: string){

    if (this.credenciales.some( (elemento) => elemento.email == email && elemento.password == password)){
      this._user != this._profileService.getUser('email');
    }


  }
}
