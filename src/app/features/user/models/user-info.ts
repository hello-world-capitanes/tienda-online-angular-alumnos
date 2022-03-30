export class UserInfo {
  private _id: number;
  private _name: string;
  private _surname: string;
  private _email: string;

  constructor(id: number, name: string, surname: string, email: string) {
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  get surname(): string {
    return this._surname;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }

  get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }
}

