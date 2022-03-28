export class Product {
    private _id: number;
    private _name: string;
    private _image: string;
    private _price: number;
    private _description?: string;

    constructor(id: number, name: string, image: string, price: number, description?: string) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._price = price;
        if (!!description && description.length > 0)  {
            this._description = description;
        }
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    get price(): number {
        return this._price;
    }

    get description(): string | undefined {
        return this._description;
    }
}