export class Language {
    _key: string;
    _name: string;

    constructor(key: string, name: string) {
        this._key = key;
        this._name = name;
    
    }

    get key(): string {
        return this._key;
    }

    get name(): string {
        return this._name;
    }

}