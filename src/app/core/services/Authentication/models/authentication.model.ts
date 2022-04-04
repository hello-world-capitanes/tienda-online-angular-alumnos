export class Authentication {
  private _email: string;
  private _password: string;

  constructor(email: string, password: string) {
    this._email = email;
    this._password = password;
  }

  get password(): string {
    return this._password;
  }
  get email(): string{
    return this._email;
  }
  set email(email: string){
    this._email = email;
  }
}
