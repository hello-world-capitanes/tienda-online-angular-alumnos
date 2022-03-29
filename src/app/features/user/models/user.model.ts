export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _dni: string;
  private _lastname1: string;
  private _lastname2?: string;
  private _image?: string;
  private _active: boolean;
  private _lastLogin?: Date;
  private _lastConnection?: Date;
  private _deleteDate?: Date;

  constructor(
    id: string,
    active: boolean,
    email: string,
    dni: string,
    name: string,
    lastname1: string,
    lastname2?: string,
    image?: string,
    lastLogin?: Date,
    lastConnection?: Date,
    deleteDate?: Date,
  ) {
    this._id = id;
    this._active = active;
    this._email = email;
    this._dni = dni;
    this._name = name;
    this._lastname1 = lastname1;
    this._lastname2 = lastname2;
    this._image = image;
    this._lastLogin = lastLogin;
    this._lastConnection = lastConnection;
    this._deleteDate = deleteDate;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }

  public get dni(): string {
    return this._dni;
  }

  public get name(): string {
    return this._name;
  }

  public get lastname1(): string {
    return this._lastname1;
  }

  public get lastname2(): string | undefined {
    return this._lastname2;
  }

  public get image(): string | undefined {
    return this._image;
  }
  public set image(value: string | undefined) {
    this._image = value;
  }

  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }

  public get lastLogin(): Date | undefined {
    return this._lastLogin;
  }
  public set lastLogin(value: Date | undefined) {
    this._lastLogin = value;
  }

  public get lastConnection(): Date | undefined {
    return this._lastConnection;
  }
  public set lastConnection(value: Date | undefined) {
    this._lastConnection = value;
  }

  public get deleteDate(): Date | undefined {
    return this._deleteDate;
  }
  public set deleteDate(value: Date | undefined) {
    this._deleteDate = value;
  }
  
}
