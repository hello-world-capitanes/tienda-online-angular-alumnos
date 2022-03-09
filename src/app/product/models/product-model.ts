export class Product {
  private _name: string;
  private _foto: string;
  private _peso: string;
  private _precio: string;

  constructor(name: string, foto: string, peso: string, precio: string) {
    this._name = name;
    this._foto = foto;
    this._peso = peso;
    this._precio = precio;
  }

  get name(): string {
    return this._name;
  }

  get foto(): string{
    return this._foto;
  }

  get peso(): string{
    return this._peso;
  }

  get precio(): string{
    return this.precio;
  }

}
