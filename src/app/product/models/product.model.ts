export class Product {
    private _name: string;
    private _image: string;

    constructor(name: string, image: string) {
        this._name = name;
        this._image = image;
    }

    getName(): string {
        return this._name;
    }

    getImage(): string {
        return this._image;
    }
}
