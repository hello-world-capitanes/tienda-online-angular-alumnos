export class Product {
    private _name: string;
    private _image: string;
    private _gramos: string;
    private _precio: string;

    constructor(name: string, image: string, precio: string, gramos: string) {
        this._name = name;
        this._image = image;
        this._precio = precio;
        this._gramos = gramos;
    }

    getName(): string {
        return this._name;
    }

    getImage(): string {
        return this._image;
    }
}
