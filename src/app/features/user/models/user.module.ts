
export class User{

  private _id: number;
  private _email: string;
  private _password: string;
  private _dineros: number;
  private _usuario: string;


  constructor(id: number, dineros: number, usuario: string, email: string, password: string){
    this._id = id;
    this._dineros = dineros;
    this._usuario = usuario;
    this._email = email;
    this._password = password;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get dineros(): number {
    return this._dineros;
  }

  public set dineros(value: number) {
    this._dineros = value;
  }

  public get usuario(): string {
    return this._usuario;
  }

  public set usuario(value: string) {
    this._usuario = value;
  }
}
