export class Product{

  private _name:string;
  private _image:string;

  constructor(name:string,image:string){

    this._name=name;
    this._image=image;

  }

  get name(){

    return this._name;
  }

  get image(){

    return this._image;
  }

  set name(name:string){

    this._name=name

  }

  set image(image:string){

    this._image=image

  }

}
