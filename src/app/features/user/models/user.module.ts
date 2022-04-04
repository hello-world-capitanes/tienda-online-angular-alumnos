
export class User{
  private static _staticID: number;
  private _id: string;
  private _dineros: number;
  private _usuario: string;
  private _email: string;
  private _password: string;


  constructor(id: string, dineros: number, usuario: string, email: string, password: string){

    if (User._staticID <= 0 || User._staticID == undefined || !User._staticID){
      User._staticID = 5;

    } else {
      console.log(User._staticID);
      User._staticID++;
    }

    this._id = "" + User._staticID;
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

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
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
