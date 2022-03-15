export class Product {
    private _name: string;
    private _image: string;
    private _gramos: string;
    private _precio: string;
    private _cantidad: number;

    constructor(name: string, image: string, precio: string, gramos: string) {
        this._name = name;
        this._image = image;
        this._precio = precio;
        this._gramos = gramos;
        this._cantidad = 0;
    }

    sumarCantidad(){
      this._cantidad++;
    }

    restarCantidad(){
      if (this._cantidad > 0){
        this._cantidad--;
      }
    }

    getCantidad(){
      return this._cantidad;
    }

    getName(): string {
        return this._name;
    }

    getImage(): string {
        return this._image;
    }
}
