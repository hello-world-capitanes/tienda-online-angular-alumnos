import { Injectable } from '@angular/core';
import usersJson from '../../data/users.json';
import { User } from '../../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  private _listaUsuarios: User[] = usersJson as User[];


  constructor() {
  }

  public getUser(email: string): User | undefined{
    if (this._listaUsuarios.some( (elemento) => elemento.email == email)){
      return this._listaUsuarios.find( (elemento) => elemento.email == email)
    } else {
      return undefined
    }
  }

  public getUserID(id: string): User | undefined{
    if (this._listaUsuarios.some( (elemento) => elemento.id == id)){
      return this._listaUsuarios.find( (elemento) => elemento.id == id)
    } else {
      return undefined
    }
  }

  public get listaUsuarios(): User[] {
    return this._listaUsuarios;
  }
  public set listaUsuarios(value: User[]) {
    this._listaUsuarios = value;
  }

  public set usuario(usuario: User){
    this._listaUsuarios.push(usuario);
  }

}
