export class Register {
  private _name: string;
  private _surname: string;

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get surname() {
    return this._surname;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }

}
