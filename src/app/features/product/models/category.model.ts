export class Category{

  private _id: string;
  private _name: string;
  private _description: string;

  constructor(id: string, name:string, description: string){
      this._id = id;
      this._name = name;
      this._description = description;
  }

  get id(): string{
      return this._id;
  }

  set id(id: string){
      this._id = id;
  }

  public get name(): string {
      return this._name;
  }
  public set name(value: string) {
      this._name = value;
  }

  public get description(): string {
      return this._description;
  }
  public set description(value: string) {
      this._description = value;
  }

}
