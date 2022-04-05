import { CateogoryIdFilter } from './categoryIdFilter';
export class ProductFilter {
  private _id: number;
  private _active: boolean;
  private _name: string;
  private _categories: string;
  private _marca: string;

  constructor(id: number, active: boolean, name: string, categories: string, marca: string) {
    this._id = id;
    this._active = active;
    this._name = name;
    this._categories = categories;
    this._marca = marca;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get categories(): string {
    return this._categories;
  }
  public set categories(value: string) {
    this._categories = value;
  }

  public get marca(): string {
    return this._marca;
  }
  public set marca(value: string) {
    this._marca = value;
  }
}
