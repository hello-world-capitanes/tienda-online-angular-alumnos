

export class Cliente{

  private _nombre: string;
  private _correo: string;

  constructor(nombre: string, correo: string){
    this._correo = correo;
    this._nombre = nombre;
  }

  public getNombre(){
    return this._nombre;
  }

  public getCorreo(){
    return this._correo;
  }

  public setNombre(nombre: string){
    this._nombre = nombre;
  }

  public setCorreo(correo: string){
    this._correo = correo;
  }

}
