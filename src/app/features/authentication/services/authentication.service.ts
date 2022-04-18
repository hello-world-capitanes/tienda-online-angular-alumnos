import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UserFirestoreService } from './../../user/services/user-firestore.service';
import { Injectable } from '@angular/core';
import authjson from "src/app/features/authentication/data/authentication.json";
import { User } from '../../user/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user!:User;
  private isLogged:boolean = false;

  constructor(
    private userService: UserFirestoreService,
    private authService: AngularFireAuth,
  ) { }

  public async signIn(email:string, password:string): Promise<User|undefined>{
    return this.authService.signInWithEmailAndPassword(email,password).then(user => {
      if(!user){
        alert("vuelve a comprobar maquina");
        return;
      }else{
        return this.userService.findUserByEmail(email).then((user)=>{
          if(!user){
            return;
          }
          this.user = user;
          return this.user;
        });
      }
    })

  }
  public getUserLogged(): boolean{
    return this.isLogged;
  }
  public async signUp(email:string, password:string): Promise<boolean>{
    return this.userService.findUserByEmail(email).then((user)=>{
      if(!!user){
        alert("ya existe");
        return false;
      }else{
        return this.authService.createUserWithEmailAndPassword(email,password).then(credentials=>{
          return !!credentials;
        }
        );
      }
    })

  }
}
