export class Product {
  private _name: string;
  private _image: string;

  constructor(name: string, image: string) {
      this._name = name;
      this._image = image;
  }

  get name(): string {
      return this._name;
  }

  get image(): string {
      return this._image;
  }
}
