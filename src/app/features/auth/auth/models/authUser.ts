export class authUser{
  private _email: string;
  private _password: string;

  constructor(email:string, password:string){
    this._email = email;
    this._password = password;
  }

  get email():string{
    return this.email;
  }

  get password():string{
    return this.password;
  }
}
