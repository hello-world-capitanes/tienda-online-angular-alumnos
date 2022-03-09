export class Product {
    private _name: string;
    private _image: string;
    private _descripcion:string;
    private _precio:number;

    constructor(name: string, image: string, descripcion:string, precio:number) {
        this._name = name;
        this._image = image;
        this._descripcion=descripcion;
        this._precio=precio;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    get descripcion(): string {
      return this._descripcion;
    }

    get precio(): number {
    return this._precio;
    }
}
